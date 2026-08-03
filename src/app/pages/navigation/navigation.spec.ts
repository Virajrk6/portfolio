import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navigation } from './navigation';

describe('Navigation', () => {
  let component: Navigation;
  let fixture: ComponentFixture<Navigation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navigation],
    }).compileComponents();

    fixture = TestBed.createComponent(Navigation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should apply the incoming rotation value to the knob transform', () => {
    fixture.componentRef.setInput('rotation', 45);
    fixture.detectChanges();

    const knob = fixture.nativeElement.querySelector('.knob') as HTMLElement;
    expect(knob.style.transform).toBe('rotate(45deg)');
  });
});
