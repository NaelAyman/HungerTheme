import { Component } from '@angular/core';
import { TranslationService } from '../../../shared/services/translation.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private TranslationService: TranslationService){}

  translate(key: string): string {
    return this.TranslationService.getTranslation(key);
  }

  advSlider: OwlOptions = {
    items: 1,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    nav: true
  }
  
  categoriestSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    center: true,
    URLhashListener:true,
    autoplayHoverPause:true,
    startPosition: 'URLHash',
    navSpeed: 700,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 3
      },
      400: {
        items: 3
      },
      740: {
        items: 7
      },
      940: {
        items: 7
      }
    },
    nav: true
  }
  
  productSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: true
  }
  
  clientstSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: true
  }



  categories = [
    {
      name: 'الاكثر مبيعاً',
      image: 'cat1',
      items: [
        { 
          title: 'دجاج زربيان ',
          image: 'product-slider-img',
          description: 'دجاج طني طازج مطهو مع الارز', 
          cost: '38' 
        },
        { 
          title: 'حلى ',
          image: 'product-slider-img',
          description: 'حلا محشي بالشكولاته والنوتيلا', 
          cost: '13' 
        },
        { 
          title: 'دجاج زربيان ',
          image: 'product-slider-img',
          description: 'دجاج طني طازج مطهو مع الارز', 
          cost: '38' 
        }
      ]
    },
    {
      name: 'العروض',
      image: 'cat2',
      items: [
        { 
          title: 'دجاج زربيان ',
          image: 'product-slider-img',
          description: 'دجاج طني طازج مطهو مع الارز', 
          cost: '38' 
        },
        { 
          title: 'حلى ',
          image: 'product-slider-img',
          description: 'حلا محشي بالشكولاته والنوتيلا', 
          cost: '13' 
        }
      ]
    },
    {
      name: 'الدجاج',
      image: 'cat3',
      items: [
        { 
          title: 'دجاج زربيان ',
          image: 'product-slider-img',
          description: 'دجاج طني طازج مطهو مع الارز', 
          cost: '38' 
        },
        { 
          title: 'حلى ',
          image: 'product-slider-img',
          description: 'حلا محشي بالشكولاته والنوتيلا', 
          cost: '13' 
        },
        { 
          title: 'دجاج زربيان ',
          image: 'product-slider-img',
          description: 'دجاج طني طازج مطهو مع الارز', 
          cost: '38' 
        }
      ]
    },
    {
      name: 'اللحوم',
      image: 'cat4',
      items: [
        { 
          title: 'حلى ',
          image: 'product-slider-img',
          description: 'حلا محشي بالشكولاته والنوتيلا', 
          cost: '13' 
        },
        { 
          title: 'دجاج زربيان ',
          image: 'product-slider-img',
          description: 'دجاج طني طازج مطهو مع الارز', 
          cost: '38' 
        }
      ]
    },
    {
      name: 'المقبلات',
      image: 'cat5',
      items: [
        { 
          title: 'دجاج زربيان ',
          image: 'product-slider-img',
          description: 'دجاج طني طازج مطهو مع الارز', 
          cost: '38' 
        },
        { 
          title: 'حلى ',
          image: 'product-slider-img',
          description: 'حلا محشي بالشكولاته والنوتيلا', 
          cost: '13' 
        },
        { 
          title: 'دجاج زربيان ',
          image: 'product-slider-img',
          description: 'دجاج طني طازج مطهو مع الارز', 
          cost: '38' 
        }
      ]
    },
    {
      name: 'العصائر',
      image: 'cat6',
      items: [
        { 
          title: 'دجاج زربيان ',
          image: 'product-slider-img',
          description: 'دجاج طني طازج مطهو مع الارز', 
          cost: '38' 
        },
        { 
          title: 'حلى ',
          image: 'product-slider-img',
          description: 'حلا محشي بالشكولاته والنوتيلا', 
          cost: '13' 
        }
      ]
    },
    {
      name: 'المشروبات',
      image: 'cat7',
      items: [
        { 
          title: 'دجاج زربيان ',
          image: 'product-slider-img',
          description: 'دجاج طني طازج مطهو مع الارز', 
          cost: '38' 
        },
        { 
          title: 'حلى ',
          image: 'product-slider-img',
          description: 'حلا محشي بالشكولاته والنوتيلا', 
          cost: '13' 
        },
        { 
          title: 'دجاج زربيان ',
          image: 'product-slider-img',
          description: 'دجاج طني طازج مطهو مع الارز', 
          cost: '38' 
        }
      ]
    },
    {
      name: 'المشويات',
      image: 'cat8',
      items: [
        { 
          title: 'حلى ',
          image: 'product-slider-img',
          description: 'حلا محشي بالشكولاته والنوتيلا', 
          cost: '13' 
        },
        { 
          title: 'دجاج زربيان ',
          image: 'product-slider-img',
          description: 'دجاج طني طازج مطهو مع الارز', 
          cost: '38' 
        }
      ]
    },
  ];

  selectedCategory = this.categories[0]; // تحديد أول قسم افتراضي

  onCategorySelect(category: any) {
    this.selectedCategory = category;
    console.log(category);
  }
}