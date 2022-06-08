---
tags: [API Reference, Master Data, Merchant Category Code]
---

# Merchant Category Codes

Each business is assigned a Merchant Category Code (MCC), which is determined by the goods or services they provide. Merchants with similar types of businesses would be assigned with the same Merchant Category Code. These codes are often used for calculating interchange fees, authorizing payments, and preventing fraud, so it’s important that your connected accounts have MCCs that match their businesses.

<!-- theme: example -->
> Example: All 'Inbound telemarketing merchants' will be assigned with MCC 5967 and all 'Hotels and Resorts' will have 7011. 


- **Static MCC** : The MCC is automatically set based on the merchant processing account. If incorrect, this would need to be updated by the account representative.

- **Dynamic MCC** : The MCC is passed in the `dynamicDescriptors` object. [Dynamic Descriptors](?path=docs/Resources/Guides/Dynamic-Descriptor.md) have limited platform availability. For more information, please contact your account representative.

---

## MCC List

The below table identifies the valid values of merchant category codes and description.

| Description | Code |
| ------- | ------- |
| A/C, Refrigeration Repair | 7623 |
| Accounting/Bookkeeping Services | 8931 |
| Advertising Services | 7311 |
| Agricultural Cooperative | 0763 |
| Airlines, Air Carriers | 4511 |
| Airports, Flying Fields | 4582 |
| Ambulance Services | 4119 |
| Amusement Parks/Carnivals | 7996 |
| Antique Reproductions | 5937 |
| Antique Shops | 5932 |
| Aquariums | 7998 |
| Architectural/Surveying Services | 8911 |
| Art Dealers and Galleries | 5971 |
| Artists Supply and Craft Shops | 5970 |
| Auto Body Repair Shops | 7531 |
| Auto Paint Shops | 7535 |
| Auto Service Shops | 7538 |
| Auto and Home Supply Stores | 5531 |
| Automated Cash Disburse | 6011 |
| Automated Fuel Dispensers | 5542 |
| Automobile Associations | 8675 |
| Automotive Parts and Accessories Stores | 5533 |
| Automotive Tire Stores | 5532 |
| Bail and Bond Payments (payment to the surety for the bond, not the actual bond paid to the government agency) | 9223 |
| Bakeries | 5462 |
| Bands, Orchestras | 7929 |
| Barber and Beauty Shops | 7230 |
| Betting/Casino Gambling | 7995 |
| Bicycle Shops | 5940 |
| Billiard/Pool Establishments | 7932 |
| Boat Dealers | 5551 |
| Boat Rentals and Leases | 4457 |
| Book Stores | 5942 |
| Books, Periodicals, and Newspapers | 5192 |
| Bowling Alleys | 7933 |
| Bus Lines | 4131 |
| Business/Secretarial Schools | 8244 |
| Buying/Shopping Services | 7278 |
| Cable, Satellite, and Other Pay Television and Radio | 4899 |
| Camera and Photographic Supply Stores | 5946 |
| Candy, Nut, and Confectionery Stores | 5441 |
| Car Rental Agencies | 7512 |
| Car Washes | 7542 |
| Car and Truck Dealers (New & Used) Sales, Service, Repairs Parts and Leasing | 5511 |
| Car and Truck Dealers (Used Only) Sales, Service, Repairs Parts and Leasing | 5521 |
| Carpentry Services | 1750 |
| Carpet/Upholstery Cleaning | 7217 |
| Caterers | 5811 |
| Charitable and Social Service Organizations - Fundraising | 8398 |
| Chemicals and Allied Products (Not Elsewhere Classified) | 5169 |
| Child Care Services | 8351 |
| Childrens and Infants Wear Stores | 5641 |
| Chiropodists, Podiatrists | 8049 |
| Chiropractors | 8041 |
| Cigar Stores and Stands | 5993 |
| Civic, Social, Fraternal Associations | 8641 |
| Cleaning and Maintenance | 7349 |
| Clothing Rental | 7296 |
| Colleges, Universities | 8220 |
| Commercial Equipment (Not Elsewhere Classified) | 5046 |
| Commercial Footwear | 5139 |
| Commercial Photography, Art and Graphics | 7333 |
| Commuter Transport, Ferries | 4111 |
| Computer Network Services | 4816 |
| Computer Programming | 7372 |
| Computer Repair | 7379 |
| Computer Software Stores | 5734 |
| Computers, Peripherals, and Software | 5045 |
| Concrete Work Services | 1771 |
| Construction Materials (Not Elsewhere Classified) | 5039 |
| Consulting, Public Relations | 7392 |
| Correspondence Schools | 8241 |
| Cosmetic Stores | 5977 |
| Counseling Services | 7277 |
| Country Clubs | 7997 |
| Courier Services | 4215 |
| Court Costs, Including Alimony and Child Support - Courts of Law | 9211 |
| Credit Reporting Agencies | 7321 |
| Cruise Lines | 4411 |
| Dairy Products Stores | 5451 |
| Dance Hall, Studios, Schools | 7911 |
| Dating/Escort Services | 7273 |
| Dentists, Orthodontists | 8021 |
| Department Stores | 5311 |
| Detective Agencies | 7393 |
| Digital Goods Media – Books, Movies, Music | 5815 |
| Digital Goods – Applications (Excludes Games) | 5817 |
| Digital Goods – Games | 5816 |
| Digital Goods – Large Digital Goods Merchant | 5818 |
| Direct Marketing - Catalog Merchant | 5964 |
| Direct Marketing - Combination Catalog and Retail Merchant | 5965 |
| Direct Marketing - Inbound Telemarketing | 5967 |
| Direct Marketing - Insurance Services | 5960 |
| Direct Marketing - Other | 5969 |
| Direct Marketing - Outbound Telemarketing | 5966 |
| Direct Marketing - Subscription | 5968 |
| Direct Marketing - Travel | 5962 |
| Discount Stores | 5310 |
| Doctors | 8011 |
| Door-To-Door Sales | 5963 |
| Drapery, Window Covering, and Upholstery Stores | 5714 |
| Drinking Places | 5813 |
| Drug Stores and Pharmacies | 5912 |
| Drugs, Drug Proprietaries, and Druggist Sundries | 5122 |
| Dry Cleaners | 7216 |
| Durable Goods (Not Elsewhere Classified) | 5099 |
| Duty Free Stores | 5309 |
| Eating Places, Restaurants | 5812 |
| Educational Services | 8299 |
| Electric Razor Stores | 5997 |
| Electrical Parts and Equipment | 5065 |
| Electrical Services | 1731 |
| Electronics Repair Shops | 7622 |
| Electronics Stores | 5732 |
| Elementary, Secondary Schools | 8211 |
| Employment/Temp Agencies | 7361 |
| Equipment Rental | 7394 |
| Exterminating Services | 7342 |
| Family Clothing Stores | 5651 |
| Fast Food Restaurants | 5814 |
| Financial Institutions | 6012 |
| Fines - Government Administrative Entities | 9222 |
| Fireplace, Fireplace Screens, and Accessories Stores | 5718 |
| Floor Covering Stores | 5713 |
| Florists | 5992 |
| Florists Supplies, Nursery Stock, and Flowers | 5193 |
| Freezer and Locker Meat Provisioners | 5422 |
| Fuel Dealers (Non Automotive) | 5983 |
| Funeral Services, Crematories | 7261 |
| Furniture Repair, Refinishing | 7641 |
| Furniture, Home Furnishings, and Equipment Stores, Except Appliances | 5712 |
| Furriers and Fur Shops | 5681 |
| General Services | 1520 |
| Gift, Card, Novelty, and Souvenir Shops | 5947 |
| Glass, Paint, and Wallpaper Stores | 5231 |
| Glassware, Crystal Stores | 5950 |
| Golf Courses - Public | 7992 |
| Government Services (Not Elsewhere Classified) | 9399 |
| Grocery Stores, Supermarkets | 5411 |
| Hardware Stores | 5251 |
| Hardware, Equipment, and Supplies | 5072 |
| Health and Beauty Spas | 7298 |
| Hearing Aids Sales and Supplies | 5975 |
| Heating, Plumbing, A/C | 1711 |
| Hobby, Toy, and Game Shops | 5945 |
| Home Supply Warehouse Stores | 5200 |
| Hospitals | 8062 |
| Hotels, Motels, and Resorts | 7011 |
| Household Appliance Stores | 5722 |
| Industrial Supplies (Not Elsewhere Classified) | 5085 |
| Information Retrieval Services | 7375 |
| Insurance - Default | 6399 |
| Insurance Underwriting, Premiums | 6300 |
| Intra-Company Purchases | 9950 |
| Jewelry Stores, Watches, Clocks, and Silverware Stores | 5944 |
| Landscaping Services | 0780 |
| Laundries | 7211 |
| Laundry, Cleaning Services | 7210 |
| Legal Services, Attorneys | 8111 |
| Luggage and Leather Goods Stores | 5948 |
| Lumber, Building Materials Stores | 5211 |
| Manual Cash Disburse | 6010 |
| Marinas, Service and Supplies | 4468 |
| Masonry, Stonework, and Plaster | 1740 |
| Massage Parlors | 7297 |
| Medical Services | 8099 |
| Medical and Dental Labs | 8071 |
| Medical, Dental, Ophthalmic, and Hospital Equipment and Supplies | 5047 |
| Membership Organizations | 8699 |
| Mens and Boys Clothing and Accessories Stores | 5611 |
| Mens, Womens Clothing Stores | 5691 |
| Metal Service Centers | 5051 |
| Miscellaneous Apparel and Accessory Shops | 5699 |
| Miscellaneous Auto Dealers | 5599 |
| Miscellaneous Business Services | 7399 |
| Miscellaneous Food Stores - Convenience Stores and Specialty Markets | 5499 |
| Miscellaneous General Merchandise | 5399 |
| Miscellaneous General Services | 7299 |
| Miscellaneous Home Furnishing Specialty Stores | 5719 |
| Miscellaneous Publishing and Printing | 2741 |
| Miscellaneous Recreation Services | 7999 |
| Miscellaneous Repair Shops | 7699 |
| Miscellaneous Specialty Retail | 5999 |
| Mobile Home Dealers | 5271 |
| Motion Picture Theaters | 7832 |
| Motor Freight Carriers and Trucking - Local and Long Distance, Moving and Storage Companies, and Local Delivery Services | 4214 |
| Motor Homes Dealers | 5592 |
| Motor Vehicle Supplies and New Parts | 5013 |
| Motorcycle Shops and Dealers | 5571 |
| Motorcycle Shops, Dealers | 5561 |
| Music Stores-Musical Instruments, Pianos, and Sheet Music | 5733 |
| News Dealers and Newsstands | 5994 |
| Non-FI, Money Orders | 6051 |
| Non-FI, Stored Value Card Purchase/Load | 6540 |
| Nondurable Goods (Not Elsewhere Classified) | 5199 |
| Nurseries, Lawn and Garden Supply Stores | 5261 |
| Nursing/Personal Care | 8050 |
| Office and Commercial Furniture | 5021 |
| Opticians, Eyeglasses | 8043 |
| Optometrists, Ophthalmologist | 8042 |
| Orthopedic Goods - Prosthetic Devices | 5976 |
| Osteopaths | 8031 |
| Package Stores-Beer, Wine, and Liquor | 5921 |
| Paints, Varnishes, and Supplies | 5198 |
| Parking Lots, Garages | 7523 |
| Passenger Railways | 4112 |
| Pawn Shops | 5933 |
| Pet Shops, Pet Food, and Supplies | 5995 |
| Petroleum and Petroleum Products | 5172 |
| Photo Developing | 7395 |
| Photographic Studios | 7221 |
| Photographic, Photocopy, Microfilm Equipment, and Supplies | 5044 |
| Picture/Video Production | 7829 |
| Piece Goods, Notions, and Other Dry Goods | 5131 |
| Plumbing, Heating Equipment, and Supplies | 5074 |
| Political Organizations | 8651 |
| Postal Services - Government Only | 9402 |
| Precious Stones and Metals, Watches and Jewelry | 5094 |
| Professional Services | 8999 |
| Public Warehousing and Storage - Farm Products, Refrigerated Goods, Household Goods, and Storage | 4225 |
| Quick Copy, Repro, and Blueprint | 7338 |
| Railroads | 4011 |
| Real Estate Agents and Managers - Rentals | 6513 |
| Record Stores | 5735 |
| Recreational Vehicle Rentals | 7519 |
| Religious Goods Stores | 5973 |
| Religious Organizations | 8661 |
| Roofing/Siding, Sheet Metal | 1761 |
| Secretarial Support Services | 7339 |
| Security Brokers/Dealers | 6211 |
| Service Stations | 5541 |
| Sewing, Needlework, Fabric, and Piece Goods Stores | 5949 |
| Shoe Repair/Hat Cleaning | 7251 |
| Shoe Stores | 5661 |
| Small Appliance Repair | 7629 |
| Snowmobile Dealers | 5598 |
| Special Trade Services | 1799 |
| Specialty Cleaning | 2842 |
| Sporting Goods Stores | 5941 |
| Sporting/Recreation Camps | 7032 |
| Sports Clubs/Fields | 7941 |
| Sports and Riding Apparel Stores | 5655 |
| Stamp and Coin Stores | 5972 |
| Stationary, Office Supplies, Printing and Writing Paper | 5111 |
| Stationery Stores, Office, and School Supply Stores | 5943 |
| Swimming Pools Sales | 5996 |
| TUI Travel - Germany | 4723 |
| Tailors, Alterations | 5697 |
| Tax Payments - Government Agencies | 9311 |
| Tax Preparation Services | 7276 |
| Taxicabs/Limousines | 4121 |
| Telecommunication Equipment and Telephone Sales | 4812 |
| Telecommunication Services | 4814 |
| Telegraph Services | 4821 |
| Tent and Awning Shops | 5998 |
| Testing Laboratories | 8734 |
| Theatrical Ticket Agencies | 7922 |
| Timeshares | 7012 |
| Tire Retreading and Repair | 7534 |
| Tolls/Bridge Fees | 4784 |
| Tourist Attractions and Exhibits | 7991 |
| Towing Services | 7549 |
| Trailer Parks, Campgrounds | 7033 |
| Transportation Services (Not Elsewhere Classified) | 4789 |
| Travel Agencies, Tour Operators | 4722 |
| Truck StopIteration | 7511 |
| Truck/Utility Trailer Rentals | 7513 |
| Typesetting, Plate Making, and Related Services | 2791 |
| Typewriter Stores | 5978 |
| U.S. Federal Government Agencies or Departments | 9405 |
| Uniforms, Commercial Clothing | 5137 |
| Used Merchandise and Secondhand Stores | 5931 |
| Utilities | 4900 |
| Variety Stores | 5331 |
| Veterinary Services | 0742 |
| Video Amusement Game Supplies | 7993 |
| Video Game Arcades | 7994 |
| Video Tape Rental Stores | 7841 |
| Vocational/Trade Schools | 8249 |
| Watch/Jewelry Repair | 7631 |
| Welding Repair | 7692 |
| Wholesale Clubs | 5300 |
| Wig and Toupee Stores | 5698 |
| Wires, Money Orders | 4829 |
| Womens Accessory and Specialty Shops | 5631 |
| Womens Ready-To-Wear Stores | 5621 |
| Wrecking and Salvage Yards | 5935 |

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Dynamic Descriptors](?path=docs/Resources/Guides/Dynamic-Descriptor.md)

---
