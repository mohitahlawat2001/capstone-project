
# Online Store Readme

## Project Description

The Online Store is a capstone project developed by Affinidi. It aims to provide users with a seamless shopping experience by leveraging the Affinidi Vault and mitigating form fatigue. Users can add items to their cart and easily checkout by logging in with Affinidi.

## Features

- User-friendly interface for browsing and adding items to the cart.
- Integration with Affinidi for secure and convenient login.
- Automatic filling of shipping information using data from the user's Affinidi Vault.
- Simplified checkout process to reduce cart abandonment.

## Additional feature explained

- enlarges image of product when hover or click on add card button, which help to nicely view product details.
    coded in ProductDisplayy.css
- added feature so can user can see live count of current product in cart using session storage.
    coded in ProductDisplay.js
- added more product related to stack up.
    inside public folder
- added feature of recommandation which recommend product to user according to their current location weather
    coded in Recommended.js
- recommendation banner designed in way so that is will attract attension in first time.
    coded in Recommended.css

## Description

The online store allows users to add items to their cart and provides a better user experience by mitigating form fatigue. Users can log in with Affinidi, which retrieves their profile, contact information, and proof of humanity from the Affinidi Vault. This tamper-evident, zero-party data can be shared with consent to the online store, enabling a stellar consumer experience. The possibilities of utilizing this data are limitless.

## Checkout Process

When the user decides to checkout, they will be prompted to log in with Affinidi. Affinidi Login will request the necessary data points from the user's vault, which will be used to automatically fill in their shipping information. This simplifies the checkout process and reduces cart abandonment.

## Getting Started

To get started with the online store, follow these steps:

1. Clone the repository.
2. Install the required dependencies.
    npm install
3. Set up the Affinidi integration.
    cd server-app
    npm install
4. Run the application.
    npm start

## Contributing

Contributions to the project are welcome. If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
