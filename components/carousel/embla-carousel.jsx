import React, { useState } from 'react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import data from '../portfolio-data'
import PortfolioItem from '../portfolio-item';
import styles from '../../styles/Home.module.css';
import { useColorModeValue } from '@chakra-ui/react';

const EmblaCarousel = (props) => {
    const { options } = props
    const portfolioItems = Object.keys(data);
    const portfolio_data = data
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const SelectedEmblaDotColor = "#FF850F" 
    const emblaDotColor = useColorModeValue("#CECECF", "#757575")
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)


    const [activeIndex, setActiveIndex] = useState(0);
    function handleCarouselClick(index) {
        setActiveIndex(index === activeIndex ? null : index);
    }

    return (
        <section className="embla" >
            <div className="embla__viewport" ref={emblaRef} >
                <div className="embla__container">
                    {portfolioItems.map((item, index) => (
                        <div className="embla__slide" key={index}>
                            {/* <div className="embla__slide__number"> */}
                            {< PortfolioItem
                                key={index}
                                highlight={portfolio_data[item].highlight}
                                duration={portfolio_data[item].duration}
                                title={portfolio_data[item].title}
                                thumbnail={portfolio_data[item].thumbnail}
                                href={portfolio_data[item].link}
                                description={portfolio_data[item].description}
                                videos={portfolio_data[item].videos}
                                className={`${styles.item} embla__slide ${activeIndex === index ? `${styles.active}` : ''
                                    }`}
                                onClick={() => handleCarouselClick(index)}
                            />}
                            {/* </div> */}
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>

                <div className="embla__dots">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={'embla__dot'.concat(
                                index === selectedIndex ? ' embla__dot--selected' : ''
                            )}
                            style={{
                                '--dot-background': emblaDotColor,
                                '--dot-selected-background': SelectedEmblaDotColor,
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default EmblaCarousel
