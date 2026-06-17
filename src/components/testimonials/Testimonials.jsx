import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Star, Quote } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/pagination'
import SectionHeading from '../common/SectionHeading'
import { testimonials } from '../../data/testimonials'
import { FloatingBlob } from '../common/Decorations'

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-cream-fade py-20 sm:py-28">
      <FloatingBlob className="-right-16 top-10" size={320} color="#FADADD" />
      <FloatingBlob className="-left-16 bottom-10" size={280} color="#F8C8DC" delay={1.5} />

      <div className="container-luxe relative">
        <SectionHeading
          eyebrow="Loved By Clients"
          title="Pretty Words, Pretty Smiles"
          intro="Real reviews from clients who left the studio feeling a little more themselves."
        />

        <div className="mt-14">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              900: { slidesPerView: 2.2 },
              1200: { slidesPerView: 3 },
            }}
            className="!pb-14"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id} className="h-auto">
                <article className="glass flex h-full flex-col rounded-[1.75rem] p-7 shadow-soft">
                  <Quote className="h-7 w-7 text-rosegold/60" />
                  <div className="mt-3 flex gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-rosegold text-rosegold" />
                    ))}
                  </div>
                  <p className="mt-4 flex-1 font-serif text-lg italic leading-relaxed text-charcoal/80">
                    “{t.text}”
                  </p>
                  <div className="mt-6 flex items-center gap-3 border-t border-white/60 pt-5">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      loading="lazy"
                      className="h-12 w-12 rounded-full object-cover ring-2 ring-white"
                    />
                    <div>
                      <p className="font-display text-base text-charcoal">{t.name}</p>
                      <p className="font-sans text-xs text-rosegold">{t.role}</p>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
