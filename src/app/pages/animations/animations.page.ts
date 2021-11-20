import {
  AfterViewInit,
  Component,
  OnInit,
  ElementRef,
  ViewChild
} from '@angular/core';
import {
  DomController,
  GestureController,
  AnimationController
} from '@ionic/angular';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.page.html',
  styleUrls: ['./animations.page.scss']
})
export class AnimationsPage
  implements OnInit, AfterViewInit
{
  @ViewChild('loadingIcon', { read: ElementRef })
  loadingIcon: ElementRef;
  @ViewChild('cartBtn', { read: ElementRef })
  cartBnt: ElementRef;
  @ViewChild('cartFabBtn', { read: ElementRef })
  cartFabBnt: ElementRef;
  @ViewChild('box', { read: ElementRef }) box: ElementRef;
  @ViewChild('AppHeader', { read: ElementRef })
  header: ElementRef;
  power = 0;
  longPressActive = false;

  constructor(
    private gestureCtrl: GestureController,
    private domCtrl: DomController,
    private animationCtrl: AnimationController
  ) {}

  ngOnInit() {}

  async ngAfterViewInit() {
    // Use DomCtrl to get the correct header height
    await this.domCtrl.read(() => {
      const headerHeight =
        this.header.nativeElement.offsetHeight;
      this.setupGesture(headerHeight);
    });
  }

  setupGesture(headerHeight) {
    const moveGesture = this.gestureCtrl.create({
      el: this.box.nativeElement,
      threshold: 0,
      gestureName: 'move',
      onStart: (ev) => {
        console.log('move start!');
      },
      onMove: (ev) => {
        console.log(ev);

        const currentX = ev.currentX;
        const currentY = ev.currentY;

        this.box.nativeElement.style.transform = `translate(${currentX}px, ${
          currentY - headerHeight
        }px)`;
      },
      onEnd: (ev) => {
        console.log('move end!');
      }
    });

    // Don't forget to enable!
    moveGesture.enable(true);
  }

  startLoad() {
    const loadingAnimation = this.animationCtrl
      .create('loading-animation')
      .addElement(this.loadingIcon.nativeElement)
      .duration(1500)
      .iterations(3)
      .fromTo(
        'transform',
        'rotate(0deg)',
        'rotate(360deg)'
      );

    // Don't forget to start the animation!
    loadingAnimation.play();
  }
  addToCart() {
    const cartAnimation = this.animationCtrl
      .create('cart-animation')
      .addElement(this.cartBnt.nativeElement)
      .keyframes([
        { offset: 0, transform: 'scale(1)' },
        { offset: 0.5, transform: 'scale(1.2)' },
        { offset: 0.8, transform: 'scale(0.9)' },
        { offset: 1, transform: 'scale(1)' }
      ]);

    const cartColorAnimation = this.animationCtrl
      .create('cart-color-animation')
      .addElement(this.cartFabBnt.nativeElement)
      .fromTo('transform', 'rotate(0deg)', 'rotate(45deg)');

    const parent = this.animationCtrl
      .create('parent')
      .duration(300)
      .easing('ease-out')
      .iterations(2)
      .direction('alternate')
      .addAnimation([cartColorAnimation, cartAnimation]);

    // Playing the parent starts both animations
    parent.play();
  }
}
