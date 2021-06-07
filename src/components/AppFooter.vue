<template>
  <footer>
    <div class="row">
      <div class="col-md-3">
        <h6>QUICK LINKS</h6>
        <ul>
          <li>
            <router-link :to="{ name: 'Home' }" class="nav-link"
              >Home</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'About' }" class="nav-link"
              >About</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'Contact' }" class="nav-link"
              >Contact</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'Recipes' }" class="nav-link"
              >Recipes</router-link
            >
          </li>
        </ul>
      </div>
      <div class="col-md-3">
        <h6>Contact Us</h6>
        <ul class="contact">
          <li><i class="fa fa-envelope fa-fw"></i>info@tastyrecipes.com</li>
          <li><i class="fa fa-envelope fa-fw"></i>tastyrecipes@gmail.com</li>
          <li><i class="fa fa-phone fa-fw"></i>+254713 164 677</li>
          <li><i class="fa fa-phone fa-fw"></i>+254 739 712 770</li>
        </ul>
      </div>
      <div class="col-md-3">
        <h6>Address</h6>
        <address>
          <p>Tasty Recipes</p>
          <p>P.O Box 12345-00100</p>
          <p>Nairobi, Kenya</p>
        </address>
      </div>
      <div class="col-md-3">
        <h6>Social Links</h6>
        <ul class="social">
          <li>
            <a href="https://www.facebook.com"
              ><i class="fa fa-facebook-square fa-fw"></i
            ></a>
          </li>
          <li>
            <a href="https://www.instagram.com"
              ><i class="fa fa-instagram fa-fw"></i
            ></a>
          </li>
          <li>
            <a href="https://www.twitter.com"
              ><i class="fa fa-twitter-square fa-fw"></i
            ></a>
          </li>
          <li>
            <a href="https://www.twitter.com"
              ><i class="fa fa-pinterest-square fa-fw"></i
            ></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="copyright">
      <p>All rights reserved <i class="fa fa-copyright fw"></i>2021</p>
    </div>
  </footer>
</template>
<script>
export default {
  name: "AppFooter",
};
</script>
