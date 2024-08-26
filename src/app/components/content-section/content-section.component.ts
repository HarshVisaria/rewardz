import { Component, OnInit } from '@angular/core';

export interface Item {
  pk: number;
  name: string;
  points: number;
  display_img_url: string;
  quantity: number;
  valid_until: string;
  low_quantity: number;
}

@Component({
  selector: 'app-content-section',
  templateUrl: './content-section.component.html',
  styleUrls: ['./content-section.component.scss'],
})
export class ContentSectionComponent implements OnInit {
  items: Item[] = [];
  availableCategories = [
    'e-Voucher',
    'Products',
    'Evergreen',
    'Fashion & Retail',
  ];
  selectedCategories: string[] = ['e-Voucher'];
  isSortPanelOpen = false;

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        pk: 987,
        name: 'Grab $10',
        points: 150,
        display_img_url:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png',
        quantity: 14,
        valid_until: '2024-12-31T00:00:00',
        low_quantity: 10,
      },
      {
        pk: 2,
        name: 'Decathlon Rs.500',
        points: 10,
        display_img_url:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png',
        quantity: 14,
        valid_until: '2024-12-31T00:00:00',
        low_quantity: 4,
      },
      {
        pk: 3,
        name: 'Go HELLLO 20% Off',
        points: 0,
        display_img_url:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png',
        quantity: 0,
        valid_until: '2024-12-31T00:00:00',
        low_quantity: 2,
      },
      {
        pk: 4,
        name: 'Beard Trim 01',
        points: 0,
        display_img_url: '',
        quantity: 1,
        valid_until: '2024-12-31T00:00:00',
        low_quantity: 2,
      },
    ];
  }

  selectCategory(category: string): void {
    const index = this.selectedCategories.indexOf(category);
    if (index > -1) {
      this.selectedCategories = [];
    } else {
      this.selectedCategories = [category];
    }
  }

  toggleSortPanel() {
    this.isSortPanelOpen = !this.isSortPanelOpen;
  }

  sortByName(order: string) {
    this.items.sort((a, b) => {
      if (order === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
  }

  applySort() {
    this.isSortPanelOpen = false;
  }
}
