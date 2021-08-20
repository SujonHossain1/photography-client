import image from '../../../assets/images/Slider/slider-1.jpg';
import image2 from '../../../assets/images/Slider/slider-2.jpg';
import image3 from '../../../assets/images/Slider/slider-3.jpg';
import './Carousel.scss';

const Carousel = () => {
    return (
        <div className="homeCarousel">
            <div id="carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={image} className="d-block img-fluid" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={image2} className="d-block img-fluid" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={image3} className="d-block img-fluid" alt="..." />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carousel"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carousel"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Carousel;
