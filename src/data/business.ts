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

// export const mapEmbed =
//   'https://www.google.com/maps?q=' +
//   encodeURIComponent(business.address) +
//   '&output=embed';

export const mapEmbed =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14021.469938074903!2d77.19046015541991!3d28.528672099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1f9b226d0db%3A0xbce9fdd142d121af!2sHome%20Care%20Electrician%20Service!5e0!3m2!1sen!2sin!4v1794894514024!5m2!1sen!2sin';