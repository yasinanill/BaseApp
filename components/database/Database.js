export const COLOURS = {
    white: '#ffffff',
    black: '#000000',
    green: '#00AC76',
    red: '#C04345',
    blue: '#0043F9',
    backgroundLight: '#F0F0F3',
    backgroundMedium: '#B9B9B9',
    backgroundDark: '#777777',
    Purple :"#8a2be2",
  };
  
  export const FoodItems = [
    {
      id: 1,
      category: 'Foods',
      productname: ' Beyaz Ekmek',
      productCalorie: 102,
      Amount: "100 gram",
      productCarbo: 43,
      productProtein: 20,
      productFAt: 10.6,
      lif: 9.2,
      sodyum: 478,
      potasyum: 127,
      kalsium: 685,
      
      description:
        ' Ekmek tercihleri posa ve tam buğday içeriği yüksek olan ve glisemik indeksi daha düşük olan tahıllı ekmeklerden yana yapılmalıdır.',
      isOff: true,
      offPercentage: 10,
      productImage: require('../database/images/foods/ekmek.jpg'),
      isAvailable: true,
      productImageList: [
        require('../database/images/foods/1.jpg'),
        require('../database/images/foods/2.jpg'),
        require('../database/images/foods/foodss.png'),
      ],
    },
    {
        id: 2,
        category: 'Foods',
        productName: 'Fıstık Ezmesi',
        productCalorie: 45,
        productCarbo: 1.2,
        productProtein: 1.4,
        Amount: '1 Tatlı Kaşığı',
        productFAt: 3,

        lif: 0.4,
        sodyum: 29.7,
        potasyum: 44.7,
        kalsium: 2.4,
        description:
          'Fıstık ezmesi, her ne kadar yüksek yağ ve kalori miktarına sahip olsa da vücuda çok faydası olan bir yiyecek. Zaten sporcuların sık sık fıstık ezmesi tüketmesi bunun bir işareti. Fıstık ezmeleri yüksek oranda trans yağ içermeyen yapılarıyla öne çıkıyor. Bu nedenle fıstık ezmesi, sağlıklı yağ içeren besin kategorisine dahil diyebiliriz',
        isOff: true,
        offPercentage: 10,
        productImage: require('../database/images/foods/fistik.jpg'),
        isAvailable: true,
        productImageList: [
            require('../database/images/foods/1.jpg'),
            require('../database/images/foods/2.jpg'),
            require('../database/images/foods/foodss.png'),
        ],
      },
      
      {
        id: 3,
        category: 'Recipes',
        Amount: "300gr (1 Kase)",
        productName: 'Tavuk Çorbası',
        productCalorie: 165,
        productCarbo: 8,
        productProtein: 9,
        productFAt: 4.7,
        lif: 9.2,
        sodyum: 163.5,
        potasyum: 127.7,
        kalsium: 28.5,
        description:
          'Tavuk suyunda bulunan vitamin ve mineraller, vücuda zarar veren maddelerin atılmasını kolaylaştırır. Bu nedenle grip ve nezle gibi hastalıklarda, hastanın bolca tavuk suyu içmesi istenir. Gribe neden olan virüslerin, vücuttan kolayca atılması tavuk suyu çorbası sayesindedir.',
        isOff: true,
        offPercentage: 10,
        productImage: require('../database/images/foods/tavuk.jpg'),
        isAvailable: true,
        productImageList: [
            require('../database/images/foods/1.jpg'),
            require('../database/images/foods/2.jpg'),
            require('../database/images/foods/foodss.png'),
        ],
      },
      {
        id: 4,
        category: 'Foods',
        productName: 'Tavuk But',
        Amount: "250gr 1 Adet",
        productCalorie: 307,
        productCarbo: 1,
        productProtein: 49,
        productFAt: 10,
        lif: 1,
        sodyum: 235,
        potasyum: 12,
        kalsium: 234.5,
        description:
          ' Tavuk eti, protein, potasyum, fosfor, demir, çinko açısından zengindir. Derisiz olarak, haşlama, fırın ya da ızgara pişirme yöntemleriyle tüketilmesi önerilir.',
        isOff: true,
        offPercentage: 10,
        productImage: require('../database/images/foods/but.jpg'),
        isAvailable: true,
        productImageList: [
            require('../database/images/foods/1.jpg'),
            require('../database/images/foods/2.jpg'),
            require('../database/images/foods/foodss.png'),
        ],
      },
      {
        id: 5,
        category: 'Foods',
        productName: 'Ceviz',
         Amount: "1 Adet",
        productCalorie: 35,
        productCarbo: 0.6,
        productProtein: 1.2,
        productFAt: 2.8,
        lif: 0.2,
        sodyum: 0,
        potasyum: 25,
        kalsium: 3,
        description:
          'Ceviz %65 oranında yağ ile yaklaşık %15 oranında protein içeriyor. Yaklaşık 654 kaloriye sahip 100 gram cevizde 6.7 gram lif bulunuyor. Çoklu doymamış yağ asitleri ve özellikle de ‌linoleik asit olarak adlandırılan ‌Omega-6 yağ asidi açısından zengin olan cevizin toplam yağ içeriğinin yaklaşık %‌8-14’lük kısmı ‌alfa-linolenik asit (ALA) olarak bilinen ‌Omega-3 yağ asidinden oluşuyor. Ceviz vitamin ve mineraller açısından da oldukça zengin bir besin. Bakır, fosfor, manganez gibi mineraller ile ‌folik asit, ‌B6  ve E vitamini gibi vitaminler içeriyor. Aynı zamanda antioksidan bileşenler açısından da zengin bir besin olan cevizde bulunan flavonoidler de vücut için önemli görevler üstleniyor.',
        isOff: true,
        offPercentage: 10,
        productImage: require('../database/images/foods/ceviz.jpg'),
        isAvailable: true,
        productImageList: [
            require('../database/images/foods/1.jpg'),
            require('../database/images/foods/2.jpg'),
            require('../database/images/foods/foodss.png'),
        ],
      },

      {
        id: 26,
        category: 'Recipes',
        Amount: "1 porsiyon 359 gram",
        productName: 'Fit Magnolia',

        productCalorie: 541,
        productCarbo: 73,
        productProtein: 12,
        productFAt: 21,
        lif: 9.2,
        sodyum: 163.5,
        potasyum: 127.7,
        kalsium: 28.5,
        description:
          'Süt, yumurta sarısı ve pirinç ununu karıştırıp ocakta kaynayana kadar pişirilir. Kaynamaya yakın vanilin, bal ilave edilir. Bisküviler ufalanır, bir bardağa veya kaseye önce muhallebi, sonra çilekler ve bisküviler ilave edilir Sonra tekrar muhallebi ilave edilir ve isteğe göre süslenir.',

        
        isOff: true,
        offPercentage: 10,
        productImage: require('../database/images/foods/22.png'),
        isAvailable: true,
        productImageList: [
            require('../database/images/foods/1.jpg'),
            require('../database/images/foods/2.jpg'),
            require('../database/images/foods/foodss.png'),
        ],
      },
      {
        id: 25,
        category: 'Recipes',
        Amount: "1 porsiyon 306 gram",
        productName: 'Havuçlu Tarçınlı Kakaolu Kek',
        productCalorie: 832,
        productCarbo: 120,
        productProtein: 12,
        productFAt: 25,
        lif: 9.2,
        sodyum: 163.5,
        potasyum: 127.7,
        kalsium: 28.5,
        description:
          'Yumurta ve şeker köpük olana kadar çırpılır. Un hariç tüm malzemeler eklenir, ardından un eklenir. Havuç ve cevizde eklenir fırına verilir. 180 derecede pişirilir Glutensiz unda 1-2 su bardağı kıvama göre eklenebilir. Ancak yulaf unu gibi tam olarak unlarda 2 su bardağı eklemeniz gerekebilir.',
        isOff: true,
        offPercentage: 10,
        productImage: require('../database/images/foods/havuc.png'),
        isAvailable: true,
        productImageList: [
            require('../database/images/foods/1.jpg'),
            require('../database/images/foods/2.jpg'),
            require('../database/images/foods/foodss.png'),
        ],
      },
      {
        id: 24,
        category: 'Recipes',
        Amount: "1 porsiyon 55gr",
        productName: 'Leblebi Bar',
        productCalorie: 165,
        productCarbo: 33,
        productProtein: 4,
        productFAt: 4.71,
        lif: 9.2,
        sodyum: 163.5,
        potasyum: 127.7,
        kalsium: 28.5,
        description:
          'Leblebileri robottan geçirelim Tahin,pekmez ve 4 yemek kaşığı ılık su ekleyip karıştıralım. Streç film geçirdiğimiz kaba bastıralım Buzdolabında 10 dk bekletelim Ters çevirip dilimleyelim Üzeri için bitter ya da beyaz çikolata kullanabilirsiniz.',
        isOff: true,
        offPercentage: 10,
        isAvailable: true,
        productImageList: [
            require('../database/images/foods/1.jpg'),
            require('../database/images/foods/2.jpg'),
            require('../database/images/foods/foodss.png'),
        ],
      },
      {
        id: 23,
        category: 'Recipes',
        Amount: "1 porsion 36 gram",
        productName: 'Hurmali Toplar',
        productCalorie: 72,
        productCarbo: 8,
        productProtein: 2,
        productFAt: 3,
        lif: 1.2,
        sodyum: 163.5,
        potasyum: 127.7,
        kalsium: 28.5,
        description:
          'Tavuk suyunda bulunan vitamin ve mineraller, vücuda zarar veren maddelerin atılmasını kolaylaştırır. Bu nedenle grip ve nezle gibi hastalıklarda, hastanın bolca tavuk suyu içmesi istenir. Gribe neden olan virüslerin, vücuttan kolayca atılması tavuk suyu çorbası sayesindedir.',
        isOff: true,
        offPercentage: 10,
    
        isAvailable: true,
        productImageList: [
            require('../database/images/foods/1.jpg'),
            require('../database/images/foods/2.jpg'),
            require('../database/images/foods/foodss.png'),
        ],
      },
      {
        id: 22,
        category: 'Recipes',
        Amount: "558 gr",
        productName: 'Tavuklu Kinoali Salata',
        productCalorie: 543,
        productCarbo: 43,
        productProtein: 55,
        productFAt: 30,
        lif: 9.2,
        sodyum: 163.3,
        potasyum: 127.7,
        kalsium: 28.5,
        description:
          '2 yemek kaşığı kinoayı 1 sb su ile haşlayın. Kinoa haşlanırken bir yandan 150 g tavuğu yağsız tavada ızgara olarak pişirin. Marulu, domatesi, avokadoyu dilimleyerek salata kasesine koyun. Haşlanan kinoayı ve tavada pişen tavuğu kaseye ekleyin, yağ ve limon ilave edin. 1 tabak tavuklu kinoalı salata 45 g karbonhidrat içerir.',
        isOff: true,
        offPercentage: 10,
        productImage: require('../database/images/foods/tavuk2.jpg'),
        isAvailable: true,
        productImageList: [
            require('../database/images/foods/1.jpg'),
            require('../database/images/foods/2.jpg'),
            require('../database/images/foods/foodss.png'),
        ],
      },





      {
        id: 6,
        category: 'Foods',
        productName: 'Ülker Çikolatalı Gofret',
        Amount:  " 1 Paket",
        productCalorie: 198,
        productCarbo: 20,
        productProtein: 2,
        productFAt: 11,
        lif: 0,
        sodyum: 0,
        potasyum: 0,
        kalsium: 0,
        description:
          ' Ülker çikolatalı gofret, yağ ve şeker içeriği yüksek bir çikolatadır. Bu yüzden çok sık tüketilmemelidir. Özellikle şeker hastalarının tüketmemeye özen göstermesi gerekir. Tüketileceği zaman, yarım paket tüketilmesi yeterlidir.',
        isOff: true,
        offPercentage: 10,
        productImage: require('../database/images/foods/ulker.jpg'),
        isAvailable: true,
        productImageList: [
            require('../database/images/foods/1.jpg'),
            require('../database/images/foods/2.jpg'),
            require('../database/images/foods/foodss.png'),
        ],
      },
      {
        id: 7,
        category: 'Foods',
        productName: 'Simit',
        Amount: "100 gram 1 adet",
        productCalorie: 290,
        productCarbo: 48,
        productProtein: 3.3,
        productFAt: 5,
        lif: 2.2,
        sodyum: 293,
        potasyum: 131,
        kalsium: 65,
        description:
          'Pek çoklarının bir tane yedim, bu öğünü hafif atlattım diye tercih ettiği simit, sandığımız kadar masum değil. 1 simit 4 dilim ekmeğe eşdeğerdir.  Yağlı bir besin olan susam, simidin kalorisi artırır. Bu nedenle simit tüketirken dikkat edin ve akşam yemeyin.',
        isOff: true,
        offPercentage: 10,
        productImage: require('../database/images/foods/simit.jpg'),
        isAvailable: true,
        productImageList: [
            require('../database/images/foods/1.jpg'),
            require('../database/images/foods/2.jpg'),
            require('../database/images/foods/foodss.png'),
        ],
      },
      {
        id: 8,
        category: 'Foods',
        productName: 'Kola',
        Amount: "200 ml",
        productCalorie: 122,
        productCarbo: 21,
        productProtein: 0,
        productFAt: 0,
        lif: 0,
        sodyum: 0,
        potasyum: 0,
        kalsium: 0,
        description:
          'Kola, yüksek oranda şeker içeriğine sahiptir. Ayrıca asitli olmaları özellikle sindirim sistemine zarar verebilir ve aşırı tüketimi kilo artışına sebep olabilir. Bu sebeple tüketilmemesine özen gösterilmelidir.',
        isOff: true,
        offPercentage: 10,
        productImage: require('../database/images/foods/kola.jpg'),
        isAvailable: true,
        productImageList: [
            require('../database/images/foods/1.jpg'),
            require('../database/images/foods/2.jpg'),
            require('../database/images/foods/foodss.png'),
        ],
      },
      {
        id: 12,
        category: 'Foods',
        productName: 'Yoğurt (Tam Yağlı)',
        Amount: "100 gram",
        productCalorie: 65,
        productCarbo: 9,
        productProtein: 9,
        productFAt: 6,
        lif: 2,
        sodyum: 26,
        potasyum: 94,
        kalsium: 310,
        description:
          'Yoğurdun içeriğinde yüksek oranda kaliteli süt proteinleri, kalsiyum, yağ ve karbonhidrat ile potasyum, magnezyum, fosfor ve çinko mineralleri bulunuyor. Yoğurt oluşumu için gereken maya bakterileri çoğalırken B1, B2 ve B3 vitaminlerini sentezliyor. Bu sayede yoğurt süt kaynaklı vitamin içeriğine ek olarak B grubu vitaminleri yönünden de zenginleşmiş oluyor.',
        isOff: true,
        offPercentage: 10,
        productImage: require('../database/images/foods/yogurt.jpg'),
        isAvailable: true,
        productImageList: [
            require('../database/images/foods/1.jpg'),
            require('../database/images/foods/2.jpg'),
            require('../database/images/foods/foodss.png'),
        ],
      },
      
      {
        id: 16,
        category: 'Foods',
        productName: 'Yumurta',
        Amount: "1 Adet (Orta)",
        productCalorie: 72,
        productCarbo: 0.3,
        productProtein: 6,
        productFAt: 4,
        lif: 0,
        sodyum: 71,
        potasyum: 127,
        kalsium: 85,
        description:
          'Up to 20 hours battery life | Super powerful Bass | 40mm dynamic driver | Pressure less ear muffs | Bluetooth 5.0 | Voice control',
        isOff: true,
        offPercentage: 10,
      
        isAvailable: true,
        productImageList: [
            require('../database/images/foods/1.jpg'),
            require('../database/images/foods/2.jpg'),
            require('../database/images/foods/foodss.png'),
        ],
      },


      {
        id: 17,
        category: 'Foods',
        productName: 'Beyaz Peynir',
        Amount: "1 Dilim (Orta)",
        productCalorie: 92,
        productCarbo: 0.7,
        productProtein: 6,
        productFAt: 7,
        lif: 0,
        sodyum: 21,
        potasyum: 227,
        kalsium: 35,
        description:
          'Beyaz peynirin 100 gramında 310 kalori bulunmaktadır. Beyaz peynirin 1 dilimi (30 gr) 93 kalori, 1 çorba kaşığı (10 gr) 31 kaloridir. Beyaz peynirin 100 gramı 2.53 gram karbonhidrat, 20.38 gram protein, 24.31 gram yağ içermektedir Kahvaltılık ürünler denildiği zaman ilk olarak peynir çeşitleri akla geliyor. Fermente bir süt ürünü olan peynir, her yaştan tüketicinin sağlıklı beslenme tercihinde yer alıyor. Piyasada birçok çeşidi bulunan peynir grubu ürünler, sofralara zenginlik katıyor. Kendine has dokusu ve tadı ile girdiği tüm tariflere uyum sağlayan peynir, içerdiği kalsiyum, potasyum ve protein sayesinde vücudun tüm gereksinimlerini karşılamayı sağlıyor',
        isOff: true,
        offPercentage: 10,
        isAvailable: true,
        productImageList: [
            require('../database/images/foods/1.jpg'),
            require('../database/images/foods/2.jpg'),
            require('../database/images/foods/foodss.png'),
        ],
      },

      {
        id: 18,
        category: 'Foods',
        productName: 'pizza',
        Amount: "1 Porsiyon (285 gr)",
        productCalorie: 403,
        productCarbo: 55,
        productProtein: 25,
        productFAt: 7,
        lif: 5.5,
        sodyum: 197,
        potasyum: 627,
        kalsium: 185,
        description:
          'Orta boy pizza için değerler şu şekilde: 1 dilim karışık pizza 130 gram için 241 kcal. 1 porsiyon orta boy karışık pizza 185 gram için 344 kcal. 100 gram karışık pizza 186 kcal.',
        isOff: true,
        offPercentage: 10,
        productImage: require('../database/images/foods/pizza.jpg'),
        isAvailable: true,
        productImageList: [
            require('../database/images/foods/1.jpg'),
            require('../database/images/foods/2.jpg'),
            require('../database/images/foods/foodss.png'),
        ],
      },











     
  ];
  