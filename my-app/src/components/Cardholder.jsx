import Card from './Card';

function Cardholder() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-screen-lg mx-auto justify-items-center'>
      <Card
        imageSrc="https://i.etsystatic.com/27700581/r/il/0b3442/3428546824/il_600x600.3428546824_sj1x.jpg"
        title="Electronics"
        items={["TV Televisions", "Air Conditioners", "Washing Machines", "Audio and Theaters", "Office Electronics"]}
      />
      <Card
        imageSrc="https://i.etsystatic.com/7803582/c/2000/2000/0/751/il/2468b9/2149157741/il_600x600.2149157741_x6uo.jpg"
        title="Clothings"
        items={["Womens", "Mens", "Bags & Backpacks", "Accessories"]}
      />
      <Card
        imageSrc="https://static1.xdaimages.com/wordpress/wp-content/uploads/wm/2023/11/yoga-aio-9i-32.jpg"
        title="Computers"
        items={["Desktop PC", "Laptop", "PC Gaming", "Storage & Memory", "PC Components"]}
      />
      <Card
        imageSrc="https://i.etsystatic.com/32138048/r/il/16b44f/5770575195/il_600x600.5770575195_haao.jpg"
        title="Home & Kitchen"
        items={["Furnitures", "Decor", "Cookwares", "Utensils & Gadgets", "Garden Tools"]}
      />
      <Card
        imageSrc="https://i.etsystatic.com/40433748/c/1500/1500/145/300/il/e6b7bb/5718452340/il_600x600.5718452340_oj8v.jpg"
        title="Healthy & Beauty"
        items={["Makeup", "Skin Care", "Hair Care", "Tools & Equipment", "Perfumes"]}
      />
      <Card
        imageSrc="https://i.etsystatic.com/41680084/r/il/f09928/5191407963/il_1588xN.5191407963_rurr.jpg"
        title="Jewelry & Watch"
        items={["Pendant", "Necklace", "Watch", "Bracelet", "Accessories"]}
      />
    </div>
  );
}

export default Cardholder;