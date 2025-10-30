import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Vehicle {
  id: number;
  name: string;
  model: string;
  price: number;
  image: string;
  features: string[];
  category: string;
  available: boolean;
}

@Component({
  selector: 'app-website',
  imports: [RouterLink, CommonModule],
  templateUrl: './website.component.html',
  styleUrl: './website.component.css'
})
export class WebsiteComponent {
  // Nos derniers véhicules
  latestVehicles: Vehicle[] = [
    {
      id: 1,
      name: 'Tesla Model 3',
      model: '2024',
      price: 89,
      image: 'assets/car.png',
      features: ['Autonomous', 'Electric', 'Premium'],
      category: 'Luxury',
      available: true
    },
    {
      id: 2,
      name: 'BMW X5',
      model: '2024',
      price: 75,
      image: 'assets/car.png',
      features: ['SUV', 'Automatic', 'GPS'],
      category: 'SUV',
      available: true
    },
    {
      id: 3,
      name: 'Audi A4',
      model: '2024',
      price: 65,
      image: 'assets/car.png',
      features: ['Sedan', 'Premium', 'Auto Park'],
      category: 'Sedan',
      available: false
    },
    {
      id: 4,
      name: 'Mercedes C-Class',
      model: '2024',
      price: 82,
      image: 'assets/car.png',
      features: ['Luxury', 'Convertible', 'Premium Sound'],
      category: 'Convertible',
      available: true
    }
  ];

  // Méthode pour récupérer les véhicules disponibles
  getAvailableVehicles(): Vehicle[] {
    return this.latestVehicles.filter(vehicle => vehicle.available);
  }

  // Méthode pour récupérer tous les véhicules
  getAllVehicles(): Vehicle[] {
    return this.latestVehicles;
  }

  // Méthode pour formater le prix
  formatPrice(price: number): string {
    return `$${price}/day`;
  }
}