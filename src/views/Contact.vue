<template>
  <div class="container">
    <h1>CONTACT US</h1>
    <div class="row mb-5">
      <div class="col-md-5 contact-address">
        <h2>Address</h2>
        <address>
          <p><i class="fa fa-map-marker fa-fw"></i>P.O Box 12345-00200</p>
          <p>Nairobi, Kenya</p>
          <p>info@tastyrecipes.com</p>
          <p>tastyrecipes@gmail.com</p>
        </address>
      </div>
      <div class="col-md-7 feedback">
        <form>
          <h2>Send us a Message!</h2>
          <div class="form-group">
            <input
              type="text"
              name="firstName"
              id="firstName"
              class="form-control"
              placeholder="First Name"
              required
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              name="lastName"
              id="lastName"
              class="form-control"
              placeholder="Last Name"
              required
            />
          </div>
          <div class="form-group">
            <textarea
              class="form-control"
              id="message"
              rows="4"
              placeholder="write your message here..."
            >
            </textarea>
          </div>
          <button type="submit" class="btn btn-lg btn-success">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Contact",
};
</script>
