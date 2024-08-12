import { forwardRef, useImperativeHandle, useState, ForwardRefExoticComponent, RefAttributes } from 'react'
import { IData } from '../../data/bouildings'
import styles from '../screen/Buildings/bouildings.module.css'
import { CiHeart } from 'react-icons/ci'

interface ICarousel {
  cards: IData[]
}

export interface CarouselHandle {
  nextSlide: () => void
  prevSlide: () => void
}

const Carousel: ForwardRefExoticComponent<ICarousel & RefAttributes<CarouselHandle>> = forwardRef<CarouselHandle, ICarousel>(({ cards }, ref) => {
  const [startIndex, setStartIndex] = useState(0)

  const nextSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex === cards.length - 4 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 4 : prevIndex - 1
    )
  }

  useImperativeHandle(ref, () => ({
    nextSlide,
    prevSlide,
  }))

  const visibleCards = cards.slice(startIndex, startIndex + 4)

  return (
    <div className="carousel">
      <div className={styles.carousel_content}>
        {visibleCards.map((card) => (
          <div className={styles.CardItem} key={card.id}>
            <div>
              <CiHeart className={styles.Like} />
            </div>
            <div className={styles.Image}>
              <img
                className={styles.ImageToLeft}
                src={card.image}
                alt="example image"
              />
            </div>
            <div className={styles.name__price}>
              <div className={styles.name}>{card.name}</div>
              <div className={styles.price}>{card.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
})

export default Carousel
