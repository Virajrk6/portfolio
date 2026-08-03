import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

interface Star {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  alpha: number;
  color: string;
}

@Component({
  selector: 'app-star-background',
  imports: [],
  templateUrl: './background.html',
  styleUrl: './background.css',
})

export class StarBackgroundComponent {
  @ViewChild('starCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  private context!: CanvasRenderingContext2D;
  private stars: Star[] = [];
  private mouse = { x: 0, y: 0 };
  private numberOfStars = 500;

  ngOnInit(): void {
    this.renderCanvas();
  }
  @HostListener('window:resize')
  resizeCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    this.stars = [];
    this.createStars();
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.mouse.x = event.clientX;
    this.mouse.y = event.clientY;
  }

  renderCanvas() {
    this.context = this.canvasRef.nativeElement.getContext('2d')!;
    this.resizeCanvas();
    this.createStars();
    this.animate();
  }
  private getRandomStarColor(): string {
    const rand = Math.random();

    if (rand < 0.40) {
      return '255, 255, 255'; // White
    } else if (rand < 0.60) {
      return '155, 200, 255'; // Soft Blue
    } else if (rand < 0.85) {
      return '255, 235, 160'; // Warm Yellow
    } else if (rand < 0.99) {
      return '255, 160, 90';  // Orange
    } else {
      return '255, 110, 110'; // Red
    }
  }

  private createStars(): void {
    const canvas = this.canvasRef.nativeElement;
    for (let i = 0; i < this.numberOfStars; i++) {
      const radius = Math.random() * 1.5;

      this.stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.08,
        vy: (Math.random() - 0.5) * 0.08,
        radius: radius,
        baseRadius: radius,
        alpha: Math.random(),
        color: this.getRandomStarColor(),
      });
    }
  }

  private animate = (): void => {
    const canvas = this.canvasRef.nativeElement;
    this.context.clearRect(0, 0, canvas.width, canvas.height);

    this.stars.forEach(star => {
      // Draw Star
      this.context.beginPath();
      this.context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      this.context.fillStyle = `rgba(${star.color}, ${star.alpha})`;
      this.context.fill();

      // Update Star Position
      star.x += star.vx;
      star.y += star.vy;

      // Wrap around screen edges
      if (star.x < 0) star.x = canvas.width;
      if (star.x > canvas.width) star.x = 0;
      if (star.y < 0) star.y = canvas.height;
      if (star.y > canvas.height) star.y = 0;

      // Interactive Mouse Effect
      const dx = this.mouse.x - star.x;
      const dy = this.mouse.y - star.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 80) {
        const force = (150 - distance) / 150;
        star.radius = star.baseRadius + force * 3;
        this.context.beginPath();
        this.context.moveTo(star.x, star.y);
        this.context.lineTo(this.mouse.x, this.mouse.y);
        this.context.strokeStyle = `rgba(240, 255, 255, ${force * 0.25})`;
        this.context.stroke();
      } else {
        star.radius = star.baseRadius;
      }
    });

    requestAnimationFrame(this.animate);
  }
}
