# Selenium-Comparison

This repo, is just to show the differences between using Selenium for various languages.

In this repo, there are currently 2x examples (they are stored in different folders):

- [nodejs](./nodejs/)
- [python](./python/)

After cloning this repo, follow the steps:

1. First, we will have a look at using Selenium with a nodejs (JavaScript) project.
   1. Change your working directory to the `nodejs` directory in this repo
   2. Get all the project's dependencies: run `npm install`
   3. Depending on which browser you want selenium to use, you will need to run:
      1. **Firefox**: `brew install geckodriver`
      2. **Chrome**: `brew cask install chromedriver`
   4. Go through the source code for the test. The source code is in the `google-test.js` file. [you can click here](nodejs/google-test.js)
   5. Could you understand how the test worked, and what would happen?
   6. Now, **run** the test: `node google-test.js`
2. Now, lets have a look at the same test using Python
   1. Change your working directory to the `python` directory in this repo
   2. Install Selenium for Python, using `pip install -U selenium`
   3. Go through the source code for the test. The source code is in the `google-test.py` file. [you can click here](python/google-test.py)
   4. Could you understand how the test worked, and what would happen?
   5. Now, **run** the test: `python google-test.py` or `python3 google-test.py`

If you are intrested in any particular language, feel free to play around with it, and also read the `README.md` file in the root of that project:

- [Selenium with nodejs - README.md](nodejs/README.md)
- [Selenium with python - README.md](python/README.md)
