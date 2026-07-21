import type { Metadata } from 'next';
import FillingStationContent from './FillingStationContent';

export const metadata: Metadata = {
  title: 'Areeb Areel Filling Station | Fuel, Mart, Food & Auto Care',
  description:
    'Visit Areeb Areel Filling Station for fuel services, an express mart, food, prayer facilities, washrooms and essential vehicle care.',
  keywords: [
    'Areeb Areel Filling Station',
    'Filling station Lahore',
    'Fuel station Lahore',
    'Express mart Lahore',
    'Auto care Lahore',
    'Fuel food mart Lahore',
  ],
  openGraph: {
    title: 'Areeb Areel Filling Station | Fuel, Mart, Food & Auto Care',
    description:
      'Visit Areeb Areel Filling Station for fuel services, an express mart, food, prayer facilities, washrooms and essential vehicle care.',
    url: 'https://www.areebareel.pk/filling-station',
    type: 'website',
    images: [
      {
        url: 'https://www.areebareel.pk/images/filling-station.jpg',
        width: 1200,
        height: 630,
        alt: 'Areeb Areel Filling Station Lahore',
      },
    ],
  },
};

export default function FillingStationPage() {
  return <FillingStationContent />;
}
