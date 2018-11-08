/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./app2 */ "./js/app2.js");

__webpack_require__(/*! ./app3 */ "./js/app3.js");

__webpack_require__(/*! ./app4 */ "./js/app4.js");

__webpack_require__(/*! ./app5 */ "./js/app5.js");

__webpack_require__(/*! ./app6 */ "./js/app6.js");

/***/ }),

/***/ "./js/app2.js":
/*!********************!*\
  !*** ./js/app2.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

//changing slides text
document.addEventListener("DOMContentLoaded", event => {
  var next = document.getElementById('nextPic');
  var prev = document.getElementById('prevPic');
  var array = [];
  var allLi = document.querySelectorAll('.banner__box__all li');
  var show = 0;
  allLi[show].classList.add('visible');
  next.addEventListener('click', () => {
    allLi[show].classList.remove('visible');
    show++;
    show >= allLi.length ? show = 0 : null;
    allLi[show].classList.add('visible');
  });
  prev.addEventListener('click', () => {
    allLi[show].classList.remove('visible');
    show--;
    show < 0 ? show = allLi.length - 1 : null;
    allLi[show].classList.add('visible');
  });
  next.addEventListener(setInterval(() => {
    allLi[show].classList.remove('visible');
    show++;
    show >= allLi.length ? show = 0 : null;
    allLi[show].classList.add('visible');
  }, 2000));
});

/***/ }),

/***/ "./js/app3.js":
/*!********************!*\
  !*** ./js/app3.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

//hiding text bar from articles photo
var barTextHiding = document.querySelectorAll(".article__box__img__bar");
var leng = barTextHiding.length;

for (var i = 0; i < leng; i++) {
  barTextHiding[i].addEventListener('mouseover', function () {
    this.style.opacity = "0";
  });
  barTextHiding[i].addEventListener('mouseout', function () {
    this.style.opacity = "1";
  });
}

/***/ }),

/***/ "./js/app4.js":
/*!********************!*\
  !*** ./js/app4.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

//verify symbols inside the form
document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector("form");
  var errorMsg = document.querySelector(".form__submit");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var isOK = true;
    var email = this.elements["email"].value;

    if (email.indexOf("@") === -1) {
      alert('Your E-Mail must contain "@" character');
      isOK = false;
    }

    var name = this.elements["name"].value;

    if (name.length <= 6) {
      alert('Your Name must contain at least 6 leters');
      isOK = false;
    }

    var chk = this.elements["agree"].checked;

    if (!chk) {
      alert('You have to agree with privacy policy');
      isOK = false;
    }

    if (isOK) {
      this.submit();
    }
  });
});

/***/ }),

/***/ "./js/app5.js":
/*!********************!*\
  !*** ./js/app5.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

//scroll to top button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

window.onclick = function () {
  topFunction();
};

function topFunction() {
  document.body.scrollTop = 0; // For Safari

  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/***/ }),

/***/ "./js/app6.js":
/*!********************!*\
  !*** ./js/app6.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

//changing slides photo
document.addEventListener("DOMContentLoaded", event => {
  var next = document.getElementById('nextPic');
  var prev = document.getElementById('prevPic');
  var array = [];
  var allLi = document.querySelectorAll('.banner__slider li');
  var show = 0;
  allLi[show].classList.add('visible');
  next.addEventListener('click', () => {
    allLi[show].classList.remove('visible');
    show++;
    show >= allLi.length ? show = 0 : null;
    allLi[show].classList.add('visible');
  });
  prev.addEventListener('click', () => {
    allLi[show].classList.remove('visible');
    show--;
    show < 0 ? show = allLi.length - 1 : null;
    allLi[show].classList.add('visible');
  });
  next.addEventListener(setInterval(() => {
    allLi[show].classList.remove('visible');
    show++;
    show >= allLi.length ? show = 0 : null;
    allLi[show].classList.add('visible');
  }, 2000));
});

/***/ })

/******/ });
//# sourceMappingURL=out.js.map