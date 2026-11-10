export const business = {
  name: 'Home Care Electrician Service',
  shortName: 'Home Care',

  phone: '+917428964734',
  phoneDisplay: '+91 74289 64734',
  contactReady: true,

  address:
    '268 A1, near Micasa Hotel, Hauz Rani, Malviya Nagar, New Delhi, Delhi 110017',

  areas: ['Malviya Nagar', 'Hauz Rani'],
  hours: 'Open 24 hours',

  origin:
    'https://home-care-electrician-delhi.digitalkeddy-socialm.chatgpt.site',

  maps:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent(
      'Home Care Electrician Service 268 A1 near Micasa Hotel Hauz Rani Malviya Nagar New Delhi 110017'
    ),

  profile: 'https://share.google/E7p6GykECDWmk54Er',
};

export const nearbyServiceAreas = [
  'Malviya Nagar',
  'Hauz Rani',
  'Khirki Extension',
  'Khirki Village',
  'Shivalik Colony',
  'Geetanjali Enclave',
  'Saket M Block',
  'Press Enclave, Saket',
];

export const mapEmbed =
  'https://www.google.com/maps?q=' +
  encodeURIComponent(business.address) +
  '&output=embed';