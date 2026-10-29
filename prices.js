/* =====================================================
   TARZ SALON — PRICE LIST
   Edit prices here and the website updates automatically.

   Each item is: ["Service name", "Time", price1, price2, ...]
   - Prices are numbers without commas (1200, not 1,200).
   - Use null where a price is not offered (shows as "–").
   - "cols" are the price column headings for that block.
   - Add  wide: true  for blocks with many price columns.
   ===================================================== */
const PRICE_LIST = {
  ladies: {
    label: "Ladies",
    blocks: [
      { title: "Haircut – Ladies", cols: ["Regular", "Senior Stylist"], items: [
        ["Boy Cut", "30 min", 600, 800],
        ["Haircut with Wash", "45 min", 1000, 1200]
      ]},
      { title: "Haircut – Girl (7 to 10 years only)", cols: ["Regular", "Senior Stylist"], items: [
        ["Boy Cut", "30 min", 500, 700],
        ["Haircut with Wash", "45 min", 800, 1000]
      ]},
      { title: "Hair Wash", cols: ["Price"], note: "Oily hair ₹100 extra", items: [
        ["Up to Neck", "20 min", 400],
        ["Up to Shoulder", "30 min", 500],
        ["Below Shoulder, Above Waist", "30 min", 600],
        ["Up to Waist", "45 min", 700]
      ]},
      { title: "Blow Dry", cols: ["Regular", "Senior Stylist"], items: [
        ["Up to Neck", "20 min", 400, 450],
        ["Up to Shoulder", "30 min", 450, 500],
        ["Below Shoulder, Above Waist", "40 min", 500, 600],
        ["Up to Waist", "50 min", 600, 700]
      ]},
      { title: "Ironing", cols: ["Price"], items: [
        ["Up to Shoulder", "30 min", 800],
        ["Below Shoulder, Above Waist", "45 min", 900],
        ["Up to Waist", "60 min", 1000]
      ]},
      { title: "Tongs", cols: ["Price"], items: [
        ["Up to Shoulder", "30 min", 800],
        ["Below Shoulder, Above Waist", "60 min", 1200]
      ]},
      { title: "Straightening", cols: ["Price"], items: [
        ["Up to Neck", "2 hrs", 7000],
        ["Up to Shoulder", "3 hrs", 8000],
        ["Below Shoulder, Above Waist", "4 hrs", 9000],
        ["Up to Waist", "5 hrs", 10000]
      ]},
      { title: "Rebonding / Keratin / Botox", cols: ["Price"], items: [
        ["Up to Neck", "2 hrs", 7000],
        ["Up to Shoulder", "3 hrs", 9000],
        ["Below Shoulder, Above Waist", "4 hrs", 10000],
        ["Up to Waist", "5 hrs", 12000]
      ]},
      { title: "Hair Colouring", cols: ["Price"], items: [
        ["Root Touch-up", "75 min", 1600],
        ["Pixie Hair", "75 min", 3500],
        ["Global – Up to Neck", "90 min", 4000],
        ["Global – Up to Shoulder", "100 min", 6000],
        ["Global – Below Shoulder, Above Waist", "120 min", 7000],
        ["Global – Up to Waist", "120 min", 8000],
        ["Toning – Up to Shoulder", "60 min", 2000],
        ["Toning – Below Shoulder", "90 min", 3000],
        ["Pre-Lightening – Up to Shoulder", "60 min", 4000],
        ["Pre-Lightening – Below Shoulder", "90 min", 6000]
      ]},
      { title: "Hair Nourish / Repair", cols: ["Price"], items: [
        ["L'Oréal Hair Spa", "45 min", 2000],
        ["Argan Hair Spa", "45 min", 2300],
        ["Protein Treatment", "45 min", 2500],
        ["Narutica Ritual Hair Spa", "60 min", 2500],
        ["Damaged Hair Repair Treatment", "60 min", 3000],
        ["Anti-Dandruff Treatment", "40 min", 2000]
      ]},
      { title: "Threading", cols: ["Regular", "Senior Therapist"], items: [
        ["Eyebrow", "15 min", 100, 150],
        ["Upper Lip", "10 min", 80, 100],
        ["Chin", "10 min", 80, 100],
        ["Forehead", "10 min", 80, 100],
        ["Full Face", "25 min", 500, 700]
      ]},
      { title: "Bleach", cols: ["Regular", "Senior Therapist"], items: [
        ["Upper Lip", "20 min", 200, 300],
        ["Face & Neck", "35 min", 600, 700],
        ["Feet", "35 min", 400, 500],
        ["Underarms", "35 min", 400, 500],
        ["Half Arms", "40 min", 600, 700],
        ["Full Arms", "50 min", 1200, 1300],
        ["Half Legs", "40 min", 700, 800],
        ["Full Legs", "60 min", 1500, 1700],
        ["Full Back", "40 min", 1000, 1200],
        ["Full Front", "40 min", 1000, 1200],
        ["D-Tan", "25 min", 500, 600]
      ]},
      { title: "Waxing", wide: true, cols: ["Regular · Rica Argan", "Regular · Rica Carton", "Senior · Rica Argan", "Senior · Rica Carton"], items: [
        ["Eyebrow", "15 min", 200, null, 300, null],
        ["Upper Lip", "10 min", 100, null, 200, null],
        ["Chin", "20 min", 200, null, 300, null],
        ["Forehead", "20 min", 200, null, 300, null],
        ["Full Face", "30 min", 700, null, 900, null],
        ["Full Face with Eyebrows", "45 min", 900, null, 1100, null],
        ["Side Locks", "15 min", 200, null, 300, null],
        ["Underarms", "20 min", 200, 500, 300, 700],
        ["Half Arms", "20 min", 500, 800, 700, 1000],
        ["Full Arms", "30 min", 700, 1100, 900, 1300],
        ["Half Legs", "30 min", 700, 1100, 900, 1300],
        ["Full Legs", "40 min", 1000, 1500, 1200, 1700],
        ["3/4 Legs", "40 min", 850, null, 1050, null],
        ["Full Front", "35 min", 1000, 1400, 1200, 1600],
        ["Full Back", "35 min", 1000, 1400, 1200, 1600],
        ["Stomach", "25 min", 600, 900, 800, 1100],
        ["Butt", "20 min", 1000, 1500, 1200, 1700],
        ["Bikini", "25 min", 1500, 1600, 1700, 1800],
        ["Bikini Line", "15 min", 600, 900, 800, 1100]
      ]},
      { title: "Hand & Feet", cols: ["Regular", "Senior Therapist"], items: [
        ["Cut & File", "15 min", 100, 200],
        ["Nail Polish", "20 min", 150, 250],
        ["French Polish", "30 min", 400, 500],
        ["Basic Manicure", "45 min", 900, 1100],
        ["Basic Pedicure", "75 min", 1000, 1200],
        ["Premium Manicure", "60 min", 1200, 1400],
        ["Premium Pedicure", "80 min", 1400, 1600],
        ["Exclusive Manicure", "70 min", 1600, 1800],
        ["Exclusive Pedicure", "90 min", 1800, 2000],
        ["Heel Peel", "90 min", 2000, 2200]
      ]},
      { title: "Facials", cols: ["Regular", "Senior Therapist"], items: [
        ["Clean-up", "40 min", 2000, 2300],
        ["Basic", "60 min", 3000, 3300],
        ["Premium", "90 min", 4000, 4500],
        ["Exclusive", "120 min", 4500, 5000],
        ["Hydra", "120 min", 5500, 6000],
        ["Power C", "120 min", 6000, 6500],
        ["Korean Glass", "120 min", 7000, 7500],
        ["Corrective", "120 min", 7500, 8000]
      ]},
      { title: "Massage", cols: ["Regular", "Senior Therapist"], items: [
        ["Face – Cleansing + Massage", "20 min", 700, 900],
        ["Feet – Massage + Hot Towel", "30 min", 800, 1000],
        ["Back – Massage + Hot Towel", "30 min", 900, 1100]
      ]},
      { title: "Permanent Makeup", cols: ["Price"], items: [
        ["Microneedling – Eyebrows", "120 min", 7000],
        ["Lips", "120 min", 5000],
        ["Beauty Spot", "30 min", 1200],
        ["Eyelashes", "120 min", 4500],
        ["Eyelash Lifting", "60 min", 3000]
      ]},
      { title: "Skin Polishing", cols: ["Regular", "Senior Therapist"], note: "Cleansing + Bleach + Scrub + Massage + Pack", items: [
        ["Full Hand", "90 min", 4000, 4500],
        ["Full Leg", "120 min", 5000, 5500],
        ["Feet", "60 min", 2000, 2500],
        ["Full Front", "90 min", 4000, 4500],
        ["Full Back", "90 min", 5000, 5500]
      ]},
      { title: "Skin Peel Treatment", cols: ["Price"], items: [
        ["Underarms", "30 min", 2000],
        ["Knee", "30 min", 2500],
        ["Elbow", "30 min", 1500],
        ["Hand", "60 min", 3500],
        ["Full Back", "60 min", 4000],
        ["Feet", "60 min", 2000]
      ]}
    ]
  },

  men: {
    label: "Men",
    blocks: [
      { title: "Hair", cols: ["Regular", "Senior Therapist"], items: [
        ["Hair Cut", "20 min", 300, 400],
        ["Hair Cut with Wash", "25 min", 400, null],
        ["Hair Styling", "15 min", 300, null],
        ["Hair Cut – Kids (7 to 10 years only)", "20 min", 300, null],
        ["Beard Trim / Shave", "20 min", 200, 250],
        ["Hair Wash", "10 min", 200, null]
      ]},
      { title: "Hair Colour", cols: ["Price"], items: [
        ["Hair", "45 min", 900],
        ["Beard", "45 min", 500],
        ["Moustache", "20 min", 200],
        ["Highlights", "90 min", 3000],
        ["Smoothening / Keratin", "120 min", 4000]
      ]},
      { title: "Hair & Scalp Treatment", cols: ["Price"], items: [
        ["L'Oréal Hair Spa", "30 min", 1000],
        ["Argan Hair Spa", "30 min", 1200],
        ["Narutica Ritual Hair Spa", "45 min", 1500],
        ["Anti-Dandruff Treatment", "45 min", 1500],
        ["Anti-Hairfall Treatment", "60 min", 1800]
      ]},
      { title: "Threading", cols: ["Price"], items: [
        ["Eyebrow", "15 min", 150],
        ["Cheeks", "15 min", 200]
      ]},
      { title: "Massage", cols: ["Price"], items: [
        ["Head Oil Massage", "20 min", 500],
        ["Face – Cleansing + Massage", "20 min", 700],
        ["Feet – Massage + Hot Towel", "30 min", 900]
      ]},
      { title: "Waxing for Men", cols: ["Rica Argan", "Senior Therapist"], items: [
        ["Eyebrow", "10 min", 200, 300],
        ["Side Locks", "30 min", 300, 400],
        ["Underarms", "20 min", 400, 500],
        ["Half Arms", "30 min", 700, 900],
        ["Full Arms", "40 min", 1000, 1200],
        ["Half Legs", "30 min", 1000, 1200],
        ["3/4 Legs", "40 min", 1200, 1400],
        ["Full Front", "35 min", 1500, 1700],
        ["Full Back", "35 min", 1500, 1700],
        ["Stomach", "35 min", 1500, 1700]
      ]},
      { title: "Facials", cols: ["Regular", "Senior Therapist"], items: [
        ["Face Bleach", "25 min", 500, 500],
        ["Face D-Tan", "25 min", 500, 500],
        ["Clean-up", "40 min", 2000, 2300],
        ["Basic", "60 min", 2500, 3000],
        ["Premium", "90 min", 3500, 4000],
        ["Exclusive", "120 min", 4000, 4500],
        ["Hydra", "120 min", 5000, 5500],
        ["Power C", "120 min", 5500, 6000],
        ["Korean Glass", "120 min", 6500, 7000],
        ["Corrective", "120 min", 7000, 7500]
      ]},
      { title: "Hand & Feet", cols: ["Regular", "Senior Therapist"], items: [
        ["Cut & File", "15 min", 100, 200],
        ["Nail Polish", "20 min", 150, 250],
        ["French Polish", "30 min", 400, 500],
        ["Basic Manicure", "45 min", 900, 1100],
        ["Basic Pedicure", "75 min", 1000, 1200],
        ["Premium Manicure", "60 min", 1200, 1400],
        ["Premium Pedicure", "80 min", 1400, 1600],
        ["Exclusive Manicure", "70 min", 1600, 1800],
        ["Exclusive Pedicure", "90 min", 1800, 2000],
        ["Heel Peel", "90 min", 2000, 2200]
      ]}
    ]
  },

  nails: {
    label: "Nail Bar",
    blocks: [
      { title: "Gel Polish on Natural Nails", cols: ["Price"], items: [
        ["Hands", "", 700],
        ["Feet", "", 700]
      ]},
      { title: "Temporary Tips", cols: ["Price"], items: [
        ["Hands", "", 2000],
        ["Feet", "", 1700],
        ["Hands – Soft Gel Temporary", "", 2000],
        ["Feet – Soft Gel Temporary", "", 1700]
      ]},
      { title: "Extensions", cols: ["Price"], items: [
        ["Hands", "", 3000],
        ["Feet", "", 2500]
      ]},
      { title: "Extension Refills", cols: ["Price"], items: [
        ["Hands", "", 2500],
        ["Feet", "", 2000]
      ]},
      { title: "Overlays", cols: ["Price"], items: [
        ["Hands", "", 2000],
        ["Feet", "", 1500]
      ]},
      { title: "Overlay Refills", cols: ["Price"], items: [
        ["Hands", "", 1800]
      ]},
      { title: "Removal", cols: ["Price"], items: [
        ["Gel Polish", "", 400],
        ["Temporary Extensions", "", 500],
        ["Extensions", "", 600]
      ]},
      { title: "Nail Art", cols: ["Per Nail"], items: [
        ["French", "", 50],
        ["Sticker", "", 50],
        ["Chrome", "", 100],
        ["Cat Eye", "", 100],
        ["Glitter Ombre", "", 100],
        ["Free Hand", "", 100],
        ["Stones", "", 150],
        ["Ombre", "", 150],
        ["Marble Art", "", 200]
      ]}
    ]
  }
};
