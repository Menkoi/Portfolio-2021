import React from 'react';

function Footer() {
    return(
        <footer class="footer py-4">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-4 text-lg-left"></div>
                    <div class="col-lg-4 my-3 my-lg-0">
                        <a class="btn btn-dark btn-social mx-2" href="https://github.com/Menkoi"><i class="fab fa-github"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="https://stackoverflow.com/users/14443369/celaeon"><i class="fab fa-stack-overflow"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="https://my.indeed.com/p/brandonb-fj6v792"><i class="fab fa-linkedin-in"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="mailto:celaeon@gmail.com"><i class="fas fa-envelope"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;