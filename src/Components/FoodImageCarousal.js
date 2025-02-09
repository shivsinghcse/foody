import { CDN_URL } from '../../utils/constants';

const FoodImageCarousal = (props) => {
    const { imageId } = props?.resData;

    return (
        <>
            <>
                <div className="carousal-img">
                    <img
                        style={{
                            width: '150px',
                            cursor: 'pointer',
                            // height: '150px',
                            // padding: '1rem',
                            // border: '5px solid green',
                        }}
                        className="carousal-item-img"
                        src={CDN_URL + imageId}
                    />
                </div>
            </>
        </>
    );
};

export default FoodImageCarousal;
