const products = [
  {
    id: '1',
    category: 'Clothing',
    product_name: 'Maxomorra T-shirt',
    product_slug: 'maxomorra_tshirt',
    product_description:
      'Great t-shirt from Maxomorra with orange print. Made from organic cotton. Material: 95% organic cotton (kBa), 5% elastane, GOTS certified. Care: washable at 40 ° C.',
    product_short_description: 'Very good diapers for all ages.',
    product_image: '/images/maxomorraTshirt.jpg',
    price: '21.99',
  },
  {
    id: '2',
    category: 'Clothing',
    product_name: 'Maxomorra Baby Growing Pants',
    product_slug: 'maxomorra_baby_growing_pants',
    product_description:
      "Children's clothing from Maxomorra impresses with its high quality. the striped t-shirts are perfect for combining with colorful trousers or skirts for girls.",
    product_short_description: 'Baby mid-wax trousers made of organic cotton.',
    product_image: '/images/jnyBluePants.jpg',
    price: '19.99',
  },
  {
    id: '3',
    category: 'Clothing',
    product_name: 'Walkiddy Sweater',
    product_slug: 'walkiddy_sweater',
    product_description:
      'Walkiddy pink sweater with bunny print. Made form organic cotton. Material: 95% organic cotton 5% elastane.',
    product_short_description:
      'Walkiddy pink sweater with bunny print. Made form organic cotton.',
    product_image: '/images/walkiddyPinkSweater.jpg',
    price: '37.99',
  },
  {
    id: '4',
    category: 'Clothing',
    product_name: 'JNA KA Summer Dress',
    product_slug: 'jna_ka_summer_dress',
    product_description:
      "JNY children's clothing impresses with its high quality. Organic cotton summer dress. Material: 95% organic cotton (kBa), 5% elastane, GOTS certified. Care: washable at 40 ° C.",
    product_short_description: 'Organic cotton summer dress.',
    product_image: '/images/jnyBlueDress.jpg',
    price: '32.99',
  },
  {
    id: '5',
    category: 'Toys',
    product_name: 'Le Van Toy - Fruit & Smoothie Maker',
    product_slug: 'le_van_toy_fruit_and_smoothie_maker',
    product_description:
      'Mixer & wooden fruit set with 2 cups. Compatible with all Honeybake products. Scenario and role play promote creative imagination, social and linguistic development. Can be played interactively, this promotes both the ability to interact and social interaction. 6 pieces of fruit per set that can be cut into slices - adding and removing parts of the product promotes counting practice. Made from durable, sustainable rubber wood, this enables long-lasting fun in caring for our planet. Safe Toy - Decorated and tested with non-toxic paints. Suitable for ages 2 and up',
    product_short_description: 'Mixer & wooden fruit set with 2 cups.',
    product_image: '/images/fruitMaker.jpg',
    price: '49.90',
  },
  {
    id: '6',
    category: 'Toys',
    product_name: 'SMARTMAX - Safari Animals',
    product_slug: 'smartmax_safari_animals',
    product_description:
      "Magnetic Set SmartMax My first safari animals. The SmartMax magnet kit is great fun for all small children. And literally. From the enclosed instructions, your children can easily create cute safari animals with which you will immediately go on a journey full of adventure and unexpected experiences. The animal parts are made of soft, comfortable material and have a unit magnet to hold them together. Each kit is sized to fit small children's hands. During assembly, children practice the arts of patience and concentration and develop spatial imagination and imagination. Main Features of SmartMax My First Safari Set. It supports spatial and geometric perception. Magnets can create 2D shapes and 3D objects. It develops imagination and imagination, fine motor skills and concentration. Size adapted for small children's hands. The kit has won a number of awards both in the Czech Republic and abroad. Recommended age from 12 months",
    product_short_description: 'Magnetic Set SmartMax My first safari animals.',
    product_image: '/images/smartmaxSafariFron.jpg',
    price: '22.90',
  },
  {
    id: '7',
    category: 'Books',
    product_name: 'Ava & Yves Mom and Me',
    product_slug: 'ava_and_yves_mom_and_me',
    product_description:
      'This booklet is a great gift idea and memory for all the great mums in this world! Together with an adult (e.g. dad, grandma or aunt), children can fill this booklet with photos, self-painted pictures and memories, making it a very personal gift for the best mom in the world.',
    product_short_description:
      'This booklet is a great gift idea and memory for all the great mums in this world!',
    product_image: '/images/avaMom.jpeg',

    price: '9.90',
  },
  {
    id: '8',
    category: 'Books',
    product_name: 'Ava & Yves Me and My Siblings',
    product_slug: 'ava_and_yves_me_and_my_siblings',
    product_description:
      'A great idea and memory that also includes the siblings! This booklet in Din A5 landscape format offers space for shared photos and memories and is printed on high-quality recycled paper. There are topics such as: Our first day together, This is me with my siblings, We are similar in that, Double page for each sibling, Our family, My birthday with you, a great holiday, a wonderful Christmas, etc. ',
    product_short_description:
      'This booklet in Din A5 landscape format offers space for shared photos and memories and is printed on high-quality recycled paper.',
    product_image: '/images/avaBook.jpg',
    price: '9.90',
  },
  {
    id: '9',
    category: 'Accessories',
    product_name: 'Big Friend Backpack - Zena Zebra',
    product_slug: 'big_friend_backpack_zena_zebra',
    product_description:
      "The backpack (20x31x12) in a cool zebra design, by Affenzahn, accompanies your darling at the age of 3 - 5 years safely to kindergarten. The accessory made of polyester has a size of 20 x 31 x 12 cm and a capacity of 8 liters. This means that there is enough space for all of the kids' provisions and other belongings. This is expanded by 2 side pockets, a front pocket made of mesh and 2 additional zip pockets on the feet of the cool zebra. The main compartment can also be opened with a zipper and is decorated with hand-made embroidery of the face by means of a lid flap. In addition to the loving design, there is a pull-out tongue that reveals the name tag of your favorite and the Velcro paws that can be attached to selected points on the zebra's body and thus also serve as a holder. A high level of comfort is generated by the padded shoulder straps, a handle that also serves as a suspension and the height-adjustable chest strap. In addition, the Affenzahn backpack (20x31x12) can be easily cleaned with a damp cloth.",
    product_short_description:
      'The backpack in a cool zebra design, by Affenzahn, accompanies your darling at the age of 3 - 5 years safely to kindergarten.',
    product_image: '/images/zebraFront.png',

    price: '49.90',
  },
  {
    id: '10',
    category: 'Accessories',
    product_name: 'Little Friend Backpack - Flamingo',
    product_slug: 'little_friend_packpack_flamingo',
    product_description:
      "With the small backpack (17x25x11) from Affenzahn, children from 1 to 3 years have a great companion at their side. The compartment, with a capacity of 4 l, is opened via a cover flap with a zipper. The small backpack is carried on padded shoulder straps, which are even more comfortable thanks to their velor cover and can also be individually adapted to the size of the child. A height-adjustable chest strap also fixes the backpack. The children's backpack can be hung on the cloakroom using the handle. The small backpack is made of polyester and has hand-embroidered details and reflectors. The Affenzahn backpack (17x25x11) has a pull-out tongue in which the name tag is integrated.",
    product_short_description:
      'With the small backpack from Affenzahn, children from 1 to 3 years have a great companion at their side.',
    product_image: '/images/flamingoFront.png',

    price: '39.90',
  },
  {
    id: '11',
    category: 'Accessories',
    product_name: 'Little Friend Backpack - Eluise Owl',
    product_slug: 'little_friend_backpack_eluise_owl',
    product_description:
      "With the small backpack (17x25x11) in a cute owl design by Affenzahn, children from 1 to 3 years have a great companion by their side. Thanks to her smart eye, Eluise, the owl, sees everything and everyone and can therefore take good care of the contents of the 17 x 25 x 11 cm backpack. Your compartment, with a capacity of 4 l, is opened via a cover flap with a zipper. The cute owl is carried over padded shoulder straps, which are even more comfortable thanks to their velor cover and can also be individually adapted to the size of the child. A height-adjustable chest strap also fixes the backpack. The children's backpack can be hung on the cloakroom using the handle. The owl is made of polyester and has hand-embroidered details and reflectors. The Affenzahn backpack (17x25x11) has a pull-out beak in which the name tag is integrated.",
    product_short_description:
      'With the small backpack in a cute owl design by Affenzahn, children from 1 to 3 years have a great companion by their side.',
    product_image: '/images/eluiseFront.png',

    price: '39.90',
  },
  {
    id: '12',
    category: 'Accessories',
    product_name: 'Little Friend Backpack - Maya Ladybug',
    product_slug: 'little_friend_backpack_maya_ladybug',
    product_description:
      "With the small backpack (17x25x11) in a sweet ladybug design by Affenzahn, children from 1 to 3 years have a great companion by their side.  Thanks to her smart look, Maja the ladybug sees everything and everyone and can therefore take good care of the contents of the 17 x 25 x 11 cm backpack. Your compartment, with a capacity of 4 l, is opened via a cover flap with a zipper. The friendly ladybug is carried over padded shoulder straps, which are even more comfortable thanks to their velor cover and can also be individually adapted to the size of the child. A height-adjustable chest strap also fixes the backpack. The children's backpack can be hung on the cloakroom using the handle. The cute ladybug is made of polyester and features hand-embroidered details and reflectors. The Affenzahn backpack (17x25x11) has a pull-out tongue in which the name tag is integrated.",
    product_short_description:
      'With the small backpack in a sweet ladybug design by Affenzahn, children from 1 to 3 years have a great companion by their side.',
    product_image: '/images/ladybugFront.png',

    price: '39.90',
  },
  {
    id: '13',
    category: 'Toys',
    product_name: 'LEGO - Jurassic World Indominus Rex',
    product_slug: 'lego_jurassic_world_indominus_rex',
    product_description:
      'Young builders can recreate classic scenes from the Jurassic World movie with the Indominus Rex vs. Ankylosaurus play set. The gyrosphere station has an entrance with a turnstile and trigger mechanism to let a gyrosphere roll with a LEGO minifigure on board. Children will love to let the Indominus Rex and the Ankylosaurus play exciting LEGO Jurassic World dinosaur duels. Fun role-playing games There are 5 LEGO minifigures, including Owen Grady and Claire Dearing, for creative role-playing games. The trees in the buildable jungle backdrop can be knocked over with the whipping tail of the Ankylosaurus. This building set is a great gift idea for children aged 8 and up and contains step-by-step instructions to help even beginners build with confidence. Action fun with dinosaur toy figures! LEGO Jurassic World sets contain toy dinosaurs, well-known characters, cool vehicles and much more so that fans can recreate scenes from the cartoons and films, create their own adventures or simply build and present the models to collect.',
    product_short_description:
      'Children will love to let the Indominus Rex and the Ankylosaurus play exciting LEGO Jurassic World dinosaur duels.',
    product_image: '/images/lego_jurassic.jpg',

    price: '79.99',
  },
  {
    id: '14',
    category: 'Toys',
    product_name: 'LEGO - Marvel The Guardian Ship',
    product_slug: 'lego_marvel_the_guardian_ship',
    product_description:
      "Fans can recreate one of the most legendary spaceships from the Marvel Avengers film Guardians of the Galaxy true to detail and in proper style. The hinged cockpit offers space for all of the superhero figures included in the set: Star-Lord, Groot, Rocket, Mantis, Thor and a Chitauri warrior. Fun features include a weapons cache, a computer, and a place for the heroes to nibble on coffee and donuts. A rotating stand allows the spaceship to be positioned for dynamic display and endless imaginative adventures. It's a great Avengers toy that looks super cool in every kid's room. Marvel Avengers building sets allow children to recreate scenes from their favorite Marvel films and enable imaginative role-playing games with superheroes.",
    product_short_description:
      'The hinged cockpit offers space for all of the superhero figures included in the set: Star-Lord, Groot, Rocket, Mantis, Thor and a Chitauri warrior.',
    product_image: '/images/lego-marvel.jpg',

    price: '149.99',
  },
  {
    id: '14',
    category: 'Books',
    product_name: 'Vtech - MagiBook',
    product_slug: 'vtech_magibook',
    product_description:
      'It will now be exciting, informative and downright magical with the great MagiBook from VTech! This interactive learning book system in the colors blue, green and white not only looks good and is extremely robust and practical, but also teaches children from the age of two to recognize and understand numbers, animals, music or shapes. The ergonomic pen also impresses when using the MagiBook learning books with voice output and numerous other sound effects.',
    product_short_description:
      'Interactive learning book system with ergonomic pen, USB connection cable, integrated loudspeaker and headphone connection',
    product_image: '/images/vtech_book.jpg',

    price: '31.99',
  },
  {
    id: '15',
    category: 'Books',
    product_name: 'Dino World - Magic Scratch Book',
    product_slug: 'dino_world_magic_scratch_book',
    product_description:
      'Discover the secrets of the seas - with Magic Scratch Underwater! Mega-cool scratch works of art are created on 20 deep-sea blue pages, because every "line" reveals a fantastic color fireworks display. With very easy scratching forms, great scratching instructions and plenty of space for your own imagination. Dive in and get started!',
    product_short_description:
      'With very easy scratching forms, great scratching instructions and plenty of space for your own imagination.',
    product_image: '/images/shark_book.jpg',

    price: '31.99',
  },
];

exports.up = async function up(sql) {
  await sql`
		INSERT INTO products ${sql(
      products,
      'category',
      'product_name',
      'product_slug',
      'product_description',
      'product_short_description',
      'product_image',
      'price',
    )}
	`;
};

exports.down = async function down(sql) {
  for (const product of products) {
    await sql`
		DELETE FROM
			products
		WHERE
			product_name = ${product.product_name} AND
			category = ${product.category} AND
      product_slug = ${product.product_slug} AND
			product_description = ${product.product_description} AND
			product_short_description = ${product.product_short_description} AND
			product_image = ${product.product_image} AND
			price = ${product.price}


	`;
  }
};
