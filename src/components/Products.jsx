

const products = [
  {
    name: 'תיקים',
    image: '/products/nano-bags.png',
  },
  {
    name: 'בקבוקים וספלים',
    image: '/products/nano_drinkware.png',
  },
  {
    name: 'מחברות ויומנים',
    image: '/products/nano_notebooks.png',
  },
  {
    name: 'אביזרים אישיים',
    image: '/products/nano_accessories.png',
  },
  {
    name: 'כריות וכירבוליות',
    image: '/products/nano_blankets_pillows.png',
  },
  {
    name: 'מוצרים מיוחדים',
    image: '/products/nano_special_products.png',
  },
]


function Products() {
  return (
    <section
      id="products"
      dir="rtl"
      className="bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* כותרת */}
        <div className="mx-auto max-w-2xl text-center">

          <p className="text-sm font-semibold text-[#BC8F73]">
            עולם של אפשרויות
          </p>

          <h2 className="mt-3 text-3xl font-black text-[#5A4337] sm:text-4xl">
            מה אפשר ליצור?
          </h2>

          <p className="mt-5 text-base leading-8 text-[#7E6152] sm:text-lg">
            כל יצירה מתחילה בבחירה!
            תיקים, בקבוקים, ספלים ועוד מגוון מוצרים
            שימושיים שמחכים לקבל את הטאץ'
            האישי שלכם.
          </p>

        </div>

        {/* כרטיסיות מוצרים */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">

          {products.map((product) => (
            <article
              key={product.name}
              className="group overflow-hidden rounded-[1.5rem] border border-[#EADFD8] bg-[#F8F4F0] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(90,67,55,0.10)]"
            >

              <div className="overflow-hidden bg-[#F4EDE7]">

                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                />

              </div>

              <div className="p-4 text-center sm:p-5">

                <h3 className="text-sm font-bold text-[#5A4337] sm:text-lg">
                  {product.name}
                </h3>

              </div>

            </article>
          ))}

        </div>

        {/* התאמה אישית */}
        <div className="mx-auto mt-12 max-w-3xl rounded-[1.5rem] border border-[#EADFD8] bg-[#F8F4F0] px-6 py-7 text-center sm:px-10">

          <h3 className="text-xl font-bold text-[#5A4337]">
            הסדנה שלכם, הבחירה שלכם
          </h3>

          <p className="mt-3 text-sm leading-7 text-[#7E6152] sm:text-base">
            לקראת האירוע נבחר יחד את המוצרים המתאימים
            לאופי הסדנה, למשתתפים ולתקציב —
            מוצר אחיד לכולם או מגוון מוצרים לבחירה.
          </p>

        </div>

      </div>
    </section>
  )
}

export default Products
