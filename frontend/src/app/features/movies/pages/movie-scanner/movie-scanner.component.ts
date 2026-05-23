import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-scanner',
  standalone: true,
  imports: [
    CommonModule,
    ZXingScannerModule
  ],
  templateUrl: './movie-scanner.component.html',
  styleUrls: ['./movie-scanner.component.scss']
})
export class MovieScannerComponent {

  private movieService = inject(MovieService);

  scannedBarcode = '';

  hasMovie: boolean | null = null;

  onCodeResult(barcode: string) {

    this.scannedBarcode = barcode;

    this.movieService.existsMovie(barcode)
      .subscribe({
        next: (response) => {

          this.hasMovie = response;
        }
      });
  }
}
