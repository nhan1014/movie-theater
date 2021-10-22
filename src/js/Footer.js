function Footer(props) {
    return (
        <div className="footer-pic">
            <img src={props.image} alt="" />
            <h2>
                <a href="">{props.cityName}</a>
            </h2>
            <div class="footer-margin">
                <div class="footer-text">
                    <div class="footer-body">
                        <p class="text-left">hourly</p>
                        <p class="text-right">$30</p>
                    </div>
                    <div class="footer-body ">
                        <p class="text-left">whole day</p>
                        <p class="text-right">$500</p>
                    </div>
                </div>
            </div>
            <a href="" class="link-bottom">Read More</a>
        </div>
    );
}

export default Footer;