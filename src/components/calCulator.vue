<template>
  <div class="container">
    <div
      class="d-flex justify-content-center align-items-center mb-3"
      id="main-div"
    >
      <div
        class="calDiv bg-light d-flex flex-column justify-content-center"
        id="calculator-div"
      >
        Scientific Calculator
        <textarea
          class="calDiv__inputField form-control shadow-none"
          id="input-field"
          wrap="soft"
          maxlength="40"
          v-model="displayValue"
        ></textarea>
        <p class="text-center" id="error-div">{{ errorMessage }}</p>
        <div class="d-flex justify-content-start ms-1">
          <button
            class="btn calDiv__btn border-none p-1 bg-transparent"
            id="unit-of-angle"
            @click="changeInUnitOfAngle"
          >
            {{ angleUnit }}
          </button>
          <button
            class="btn calDiv__btn bg-transparent"
            id="to-expo"
            @click="handleOperation('to-expo')"
          >
            F-E
          </button>
        </div>
        <div class="d-flex justify-content-center align-items-center mt-2">
          <button
            class="btn calDiv__btn bg-transparent fw-bold"
            id="m-clear"
            :disabled="!memory.length"
            @click="clearMemory"
          >
            MC
          </button>
          <button
            class="btn calDiv__btn bg-transparent fw-bold"
            id="m-recall"
            :disabled="!memory.length"
            @click="recallMemory"
          >
            MR
          </button>
          <button
            class="btn calDiv__btn bg-transparent fw-bold"
            id="m-plus"
            @click="handleOperation('m-plus')"
          >
            M+
          </button>
          <button
            class="btn calDiv__btn bg-transparent fw-bold"
            id="m-minus"
            @click="handleOperation('m-minus')"
          >
            M-
          </button>
          <button
            class="btn calDiv__btn bg-transparent fw-bold"
            id="m-store"
            @click="storeInMemory"
          >
            MS
          </button>
          <button
            class="btn calDiv__btn bg-transparent d-flex justify-content-evenly align-items-center fw-bold"
            id="m-show"
            @click="toggleMemoryDrawer"
          >
            M
            <img
              src="@/assets/images/sort-down.png"
              alt="sort-down-img"
              class="calDiv__arrowDownImg--size mb-2 ms-1"
            />
          </button>
          <div
            class="calDiv_drawer flex-column align-content-between"
            id="calDiv_drawer"
            v-show="showMemory"
            :style="drawerStyle"
          >
            <div class="d-flex justify-content-between align-content-center">
              <p
                class="m-3 calDiv__ErrMsgDiv"
                id="empty-msg"
                v-if="!memory.length"
              >
                There's nothing saved in your memory
              </p>
              <button
                class="calDiv__closeBtn--color border-0"
                @click="toggleMemoryDrawer"
              >
                <img
                  src="@/assets/images/close-button.png"
                  alt="close-btn"
                  class="calDiv__closeImg--size m-3"
                  id="drawer-close"
                />
              </button>
            </div>
            <div class="calDiv__numsDiv">
              <p class="me-3 h5" v-for="num in memory" :key="num">{{ num }}</p>
            </div>
            <div class="calDiv__deleteBtnDiv">
              <button
                class="calDiv__deleteBtn--color border-0"
                id="remove-nums"
                @click="removeFromMemory"
              >
                <img
                  src="@/assets/images/delete.png"
                  alt="delete-img"
                  class="calDiv__deleteImg--size m-2"
                />
              </button>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-start align-items-center">
          <div class="dropdown border-0">
            <button
              class="btn btn-dropdown border-0 rounded-0 bg-transparent calDiv__dropdownBtn--shadow"
              type="button"
              id="dropdownMenuButton2"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              <img
                src="@/assets/images/triangle.png"
                alt="triangle"
                class="calDiv__trigonoImg--size mb-1 me-1"
              />
              Trigonometry
              <img
                src="@/assets/images/down-arrow.png"
                alt="down-arrow"
                class="ms-2 calDiv__arrowDownImg--size"
              />
            </button>
            <ul
              class="dropdown-menu p-0 bg-light"
              aria-labelledby="dropdownMenuButton1"
            >
              <li class="d-flex">
                <button
                  class="btn calDiv__btn calDiv__dropdownBtn--size"
                  id="second-fn-Trigono"
                  @click="toggleTrigonometryMode"
                >
                  2 <sup>nd</sup>
                </button>
                <button
                  class="btn calDiv__btn calDiv__dropdownBtn--size d-inline trigono-h-btn trigono-btn"
                  id="sin"
                  :class="{ 'd-none': trigonometryMode }"
                  @click="handleOperation('sin')"
                >
                  sin
                </button>
                <button
                  class="btn calDiv__btn calDiv__dropdownBtn--size d-none trigono-btn trigono-h-inv"
                  id="sin-in"
                  :class="{ 'd-inline': trigonometryMode }"
                  @click="handleOperation('sin-in')"
                >
                  sin <sup>-1</sup>
                </button>
                <button
                  class="btn calDiv__btn calDiv__dropdownBtn--size d-none trigono-h-inv"
                  id="sin-h-in"
                  :class="{
                    'd-inline': trigonometryHypMode && trigonometryMode,
                  }"
                  @click="handleOperation('sin-h-in')"
                >
                  sinh <sup>-1</sup>
                </button>
                <button
                  class="btn calDiv__btn calDiv__dropdownBtn--size d-none trigono-h-btn"
                  id="sin-h"
                  :class="{
                    'd-inline': trigonometryHypMode && !trigonometryMode,
                  }"
                  @click="handleOperation('sin-h')"
                >
                  sinh
                </button>
                <button
                  class="btn calDiv__btn calDiv__dropdownBtn--size d-inline trigono-h-btn trigono-btn"
                  id="cos"
                  :class="{ 'd-none': trigonometryMode }"
                  @click="handleOperation('cos')"
                >
                  cos
                </button>
                <button
                  class="btn calDiv__btn calDiv__dropdownBtn--size d-none trigono-btn trigono-h-inv"
                  id="cos-in"
                  :class="{ 'd-inline': trigonometryMode }"
                  @click="handleOperation('cos-in')"
                >
                  cos <sup>-1</sup>
                </button>
                <button
                  class="btn calDiv__btn calDiv__dropdownBtn--size d-none trigono-h-inv"
                  id="cos-h-in"
                  :class="{
                    'd-inline': trigonometryHypMode && trigonometryMode,
                  }"
                  @click="handleOperation('cos-h-in')"
                >
                  cosh <sup>-1</sup>
                </button>
                <button
                  class="btn calDiv__btn calDiv__dropdownBtn--size d-none trigono-h-btn"
                  id="cos-h"
                  :class="{
                    'd-inline': trigonometryHypMode && !trigonometryMode,
                  }"
                  @click="handleOperation('cos-h')"
                >
                  cosh
                </button>
                <button
                  class="btn calDiv__btn calDiv__dropdownBtn--size d-inline trigono-h-btn trigono-btn"
                  id="tan"
                  :class="{ 'd-none': trigonometryMode }"
                  @click="handleOperation('tan')"
                >
                  tan
                </button>
                <button
                  class="btn calDiv__btn calDiv__dropdownBtn--size d-none trigono-btn trigono-h-inv"
                  id="tan-in"
                  :class="{ 'd-inline': trigonometryMode }"
                  @click="handleOperation('tan-in')"
                >
                  tan <sup>-1</sup>
                </button>
                <button
                  class="btn calDiv__btn calDiv__dropdownBtn--size d-none trigono-h-inv"
                  id="tan-h-in"
                  :class="{
                    'd-inline': trigonometryHypMode && trigonometryMode,
                  }"
                  @click="handleOperation('tan-h-in')"
                >
                  tanh <sup>-1</sup>
                </button>
                <button
                  class="btn calDiv__btn calDiv__dropdownBtn--size d-none trigono-h-btn"
                  id="tan-h"
                  :class="{
                    'd-inline': trigonometryHypMode && !trigonometryMode,
                  }"
                  @click="handleOperation('tan-h')"
                >
                  tanh
                </button>
              </li>
              <li class="d-flex">
                <button
                  class="btn calDiv__btn calDiv__dropdownBtn--size"
                  id="second-fn-Trigono-h"
                  @click="toggleTrigonometryHypMode"
                >
                  hyp
                </button>
                <button
                  class="btn calDiv__btn calDiv__dropdownBtn--size d-inline trigono-h-btn trigono-btn"
                  id="sec"
                  :class="{ 'd-none': trigonometryMode }"
                  @click="handleOperation('sec')"
                >
                  sec
                </button>
                <button
                  class="btn calDiv__btn calDiv__dropdownBtn--size d-none trigono-btn trigono-h-inv"
                  id="sec-in"
                  :class="{ 'd-inline': trigonometryMode }"
                  @click="handleOperation('sec-in')"
                >
                  sec <sup>-1</sup>
                </button>
                <button
                  class="btn calDiv__btn calDiv__dropdownBtn--size d-none trigono-h-inv"
                  id="sec-h-in"
                  :class="{
                    'd-inline': trigonometryHypMode && trigonometryMode,
                  }"
                  @click="handleOperation('sec-h-in')"
                >
                  sech <sup>-1</sup>
                </button>
                <button
                  class="btn calDiv__btn calDiv__dropdownBtn--size d-none trigono-h-btn"
                  id="sec-h"
                  :class="{
                    'd-inline': trigonometryHypMode && !trigonometryMode,
                  }"
                  @click="handleOperation('sec-h')"
                >
                  sech
                </button>
                <button
                  class="btn calDiv__btn calDiv__dropdownBtn--size d-inline trigono-h-btn trigono-btn"
                  id="csc"
                  :class="{ 'd-none': trigonometryMode }"
                  @click="handleOperation('csc')"
                >
                  csc
                </button>
                <button
                  class="btn calDiv__btn calDiv__dropdownBtn--size d-none trigono-btn trigono-h-inv"
                  id="csc-in"
                  :class="{ 'd-inline': trigonometryMode }"
                  @click="handleOperation('csc-in')"
                >
                  csc <sup>-1</sup>
                </button>
                <button
                  class="btn calDiv__btn calDiv__dropdownBtn--size d-none trigono-h-inv"
                  id="csc-h-in"
                  :class="{
                    'd-inline': trigonometryHypMode && trigonometryMode,
                  }"
                  @click="handleOperation('csc-h-in')"
                >
                  csch <sup>-1</sup>
                </button>
                <button
                  class="btn calDiv__btn calDiv__dropdownBtn--size d-none trigono-h-btn"
                  id="csc-h"
                  :class="{
                    'd-inline': trigonometryHypMode && !trigonometryMode,
                  }"
                  @click="handleOperation('csc-h')"
                >
                  csch
                </button>
                <button
                  class="btn calDiv__btn calDiv__dropdownBtn--size d-inline trigono-h-btn trigono-btn"
                  id="cot"
                  :class="{ 'd-none': trigonometryMode }"
                  @click="handleOperation('cot')"
                >
                  cot
                </button>
                <button
                  class="btn calDiv__btn calDiv__dropdownBtn--size d-none trigono-btn trigono-h-inv"
                  id="cot-in"
                  :class="{ 'd-inline': trigonometryMode }"
                  @click="handleOperation('cot-in')"
                >
                  cot <sup>-1</sup>
                </button>
                <button
                  class="btn calDiv__btn calDiv__dropdownBtn--size d-none trigono-h-inv"
                  id="cot-h-in"
                  :class="{
                    'd-inline': trigonometryHypMode && trigonometryMode,
                  }"
                  @click="handleOperation('cot-h-in')"
                >
                  coth <sup>-1</sup>
                </button>
                <button
                  class="btn calDiv__btn calDiv__dropdownBtn--size d-none trigono-h-btn"
                  id="cot-h"
                  :class="{
                    'd-inline': trigonometryHypMode && !trigonometryMode,
                  }"
                  @click="handleOperation('cot-h')"
                >
                  coth
                </button>
              </li>
            </ul>
          </div>
          <div class="dropdown">
            <button
              class="btn rounded-0 border-0 bg-transparent calDiv__dropdownBtn--shadow"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="@/assets/images/function-f.png"
                alt="function-f"
                class="calDiv__fnImg--size"
              />
              Function
              <img
                src="@/assets/images/down-arrow.png"
                alt="down-arrow"
                class="ms-2 calDiv__arrowDownImg--size"
              />
            </button>
            <ul
              class="dropdown-menu p-0 bg-light"
              aria-labelledby="dropdownMenuButton1"
            >
              <li class="d-flex">
                <button
                  class="btn calDiv__btn calDiv__dropdownBtn--size"
                  id="abs2"
                  @click="handleOperation('abs2')"
                >
                  ⎢x ⎢
                </button>
                <button
                  class="btn calDiv__btn calDiv__dropdownBtn--size"
                  id="floor"
                  @click="handleOperation('floor')"
                >
                  ⎣x⎦
                </button>
                <button
                  class="btn calDiv__btn calDiv__dropdownBtn--size"
                  id="celi"
                  @click="handleOperation('celi')"
                >
                  ⎡x⎤
                </button>
              </li>
              <li class="d-flex">
                <button
                  class="btn calDiv__btn calDiv__dropdownBtn--size"
                  id="random-num"
                  @click="handleOperation('random-num')"
                >
                  rand
                </button>
                <button
                  class="btn calDiv__btn calDiv__dropdownBtn--size"
                  id="dms"
                  @click="handleOperation('dms')"
                >
                  ⇾ dms
                </button>
                <button
                  class="btn calDiv__btn calDiv__dropdownBtn--size text-center"
                  id="deg"
                  @click="handleOperation('deg')"
                >
                  ⇾ deg
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div class="d-flex justify-content-center align-items-center mt-1">
          <button
            class="btn calDiv__btn"
            id="second-fn"
            @click="toggleSecondFunction"
          >
            2 <sup>nd</sup>
          </button>
          <button class="btn calDiv__btn" id="π" @click="appendCharacter('π')">
            π
          </button>
          <button class="btn calDiv__btn" id="e" @click="appendCharacter('e')">
            e
          </button>
          <button class="btn calDiv__btn" id="reset-char" @click="clearDisplay">
            C
          </button>
          <button
            class="btn calDiv__btn"
            id="remove-char"
            @click="removeLastCharacter"
          >
            <img
              src="@/assets/images/remove-icon.png"
              alt="remove-icon"
              class="calDiv__removeImg--size"
            />
          </button>
        </div>
        <div class="d-flex justify-content-center align-items-center mt-1">
          <button
            class="btn calDiv__btn d-inline 2nd-toggle-btn"
            id="**2"
            :class="{ 'd-none': secondFunction }"
            @click="handleOperation('**2')"
          >
            x<sup>2</sup>
          </button>
          <button
            class="btn calDiv__btn d-none 2nd-toggle-btn"
            id="**3"
            :class="{ 'd-inline': secondFunction }"
            @click="handleOperation('**3')"
          >
            x<sup>3</sup>
          </button>
          <button
            class="btn calDiv__btn"
            id="1/x"
            @click="handleOperation('1/x')"
          >
            1/x
          </button>
          <button
            class="btn calDiv__btn"
            id="abs1"
            @click="handleOperation('abs1')"
          >
            ⎢x ⎢
          </button>
          <button
            class="btn calDiv__btn"
            id="e**"
            @click="appendCharacter('e**')"
          >
            exp
          </button>
          <button class="btn calDiv__btn" id="%" @click="appendCharacter('%')">
            mod
          </button>
        </div>
        <div class="d-flex justify-content-center align-items-center mt-1">
          <button
            class="btn calDiv__btn d-inline 2nd-toggle-btn"
            id="sqrt"
            :class="{ 'd-none': secondFunction }"
            @click="handleOperation('sqrt')"
          >
            2√x
          </button>
          <button
            class="btn calDiv__btn d-none 2nd-toggle-btn"
            id="cbrt"
            :class="{ 'd-inline': secondFunction }"
            @click="handleOperation('cbrt')"
          >
            3√x
          </button>
          <button class="btn calDiv__btn" id="(" @click="appendCharacter('(')">
            (
          </button>
          <button class="btn calDiv__btn" id=")" @click="appendCharacter(')')">
            )
          </button>
          <button class="btn calDiv__btn" id="!" @click="appendCharacter('!')">
            n!
          </button>
          <button
            class="btn calDiv__btn fs-4"
            id="/"
            @click="appendCharacter('/')"
          >
            ÷
          </button>
        </div>
        <div class="d-flex justify-content-center align-items-center mt-1">
          <button
            class="btn calDiv__btn d-inline 2nd-toggle-btn"
            id="**"
            :class="{ 'd-none': secondFunction }"
            @click="appendCharacter('**')"
          >
            x<sup>y</sup>
          </button>
          <button
            class="btn calDiv__btn d-none 2nd-toggle-btn"
            id="rt"
            :class="{ 'd-inline': secondFunction }"
            @click="appendCharacter('rt')"
          >
            y√x
          </button>
          <button
            class="btn calDiv__btn fw-bold"
            id="7"
            @click="appendCharacter('7')"
          >
            7
          </button>
          <button
            class="btn calDiv__btn fw-bold"
            id="8"
            @click="appendCharacter('8')"
          >
            8
          </button>
          <button
            class="btn calDiv__btn fw-bold"
            id="9"
            @click="appendCharacter('9')"
          >
            9
          </button>
          <button class="btn calDiv__btn" id="*" @click="appendCharacter('*')">
            <b>x</b>
          </button>
        </div>
        <div class="d-flex justify-content-center align-items-center mt-1">
          <button
            class="btn calDiv__btn d-inline 2nd-toggle-btn"
            id="10sq"
            :class="{ 'd-none': secondFunction }"
            @click="handleOperation('10sq')"
          >
            10<sup>x</sup>
          </button>
          <button
            class="btn calDiv__btn d-none 2nd-toggle-btn"
            id="2**"
            :class="{ 'd-inline': secondFunction }"
            @click="appendCharacter('2**')"
          >
            2<sup>x</sup>
          </button>
          <button
            class="btn calDiv__btn fw-bold"
            id="4"
            @click="appendCharacter('4')"
          >
            4
          </button>
          <button
            class="btn calDiv__btn fw-bold"
            id="5"
            @click="appendCharacter('5')"
          >
            5
          </button>
          <button
            class="btn calDiv__btn fw-bold"
            id="6"
            @click="appendCharacter('6')"
          >
            6
          </button>
          <button class="btn calDiv__btn" id="-" @click="appendCharacter('-')">
            <b>-</b>
          </button>
        </div>
        <div class="d-flex justify-content-center align-items-center mt-1">
          <button
            class="btn calDiv__btn d-inline 2nd-toggle-btn"
            id="log1"
            :class="{ 'd-none': secondFunction }"
            @click="appendCharacter('log(')"
          >
            log
          </button>
          <button
            class="btn calDiv__btn d-none 2nd-toggle-btn"
            id="log2"
            :class="{ 'd-inline': secondFunction }"
            @click="appendCharacter('log2(')"
          >
            log <sub>y</sub>x
          </button>
          <button
            class="btn calDiv__btn fw-bold"
            id="1"
            @click="appendCharacter('1')"
          >
            1
          </button>
          <button
            class="btn calDiv__btn fw-bold"
            id="2"
            @click="appendCharacter('2')"
          >
            2
          </button>
          <button
            class="btn calDiv__btn fw-bold"
            id="3"
            @click="appendCharacter('3')"
          >
            3
          </button>
          <button class="btn calDiv__btn" id="+" @click="appendCharacter('+')">
            <b>+</b>
          </button>
        </div>
        <div class="d-flex justify-content-center align-items-center mt-1">
          <button
            class="btn calDiv__btn d-inline 2nd-toggle-btn"
            id="ln"
            :class="{ 'd-none': secondFunction }"
            @click="appendCharacter('ln(')"
          >
            ln
          </button>
          <button
            class="btn calDiv__btn d-none 2nd-toggle-btn"
            id="e-sq-x"
            :class="{ 'd-inline': secondFunction }"
            @click="appendCharacter('e**')"
          >
            e <sup>x</sup>
          </button>
          <button class="btn calDiv__btn" id="plus-minus" @click="toggleSign">
            +/-
          </button>
          <button
            class="btn calDiv__btn fw-bold"
            id="0"
            @click="appendCharacter('0')"
          >
            0
          </button>
          <button class="btn calDiv__btn" id="." @click="appendCharacter('.')">
            .
          </button>
          <button
            class="btn calDiv__btn calDiv__btn--blue"
            id="="
            @click="calculate"
          >
            <b>=</b>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "calCulator",
  data() {
    return {
      displayValue: "",
      errorMessage: "",
      angleUnit: "DEG",
      unitOfAngle: {
        degree: true,
        radian: false,
        grad: false,
      },
      secondFunction: false,
      trigonometryMode: false,
      trigonometryHypMode: false,
      showMemory: false,
      memory: [],
      calculatorDivRect: null,
    };
  },
  computed: {
    drawerStyle() {
      if (!this.calculatorDivRect) return {};

      const bottom = `calc(100% - ${this.calculatorDivRect.bottom}px)`;
      const height = `${this.calculatorDivRect.height * 0.65}px`;
      const width = `${this.calculatorDivRect.width}px`;

      return { bottom, height, width };
    },
  },
  mounted() {
    this.loadMemory();
    this.calculatorDivRect = document
      .getElementById("calculator-div")
      .getBoundingClientRect();
    window.addEventListener("resize", this.updateCalculatorDivRect);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateCalculatorDivRect);
  },
  methods: {
    updateCalculatorDivRect() {
      this.calculatorDivRect = document
        .getElementById("calculator-div")
        .getBoundingClientRect();
    },
    loadMemory() {
      const storedMemory = localStorage.getItem("calculatorMemory");
      if (storedMemory) {
        this.memory = JSON.parse(storedMemory);
      }
    },
    saveMemory() {
      localStorage.setItem("calculatorMemory", JSON.stringify(this.memory));
    },
    clearMemory() {
      this.memory = [];
      this.saveMemory();
    },
    recallMemory() {
      this.displayValue = this.memory[this.memory.length - 1];
    },
    storeInMemory() {
      this.memory.push(this.displayValue);
      this.saveMemory();
    },
    removeFromMemory() {
      this.memory.pop();
      this.saveMemory();
    },
    toggleMemoryDrawer() {
      this.showMemory = !this.showMemory;
    },
    toggleSecondFunction() {
      this.secondFunction = !this.secondFunction;
    },
    toggleTrigonometryMode() {
      this.trigonometryMode = !this.trigonometryMode;
    },
    toggleTrigonometryHypMode() {
      this.trigonometryHypMode = !this.trigonometryHypMode;
    },
    appendCharacter(char) {
      this.displayValue += char;
    },
    clearDisplay() {
      this.displayValue = "";
      this.errorMessage = "";
    },
    removeLastCharacter() {
      this.displayValue = this.displayValue.slice(0, -1);
    },
    toggleSign() {
      if (this.displayValue.startsWith("-")) {
        this.displayValue = this.displayValue.slice(1);
      } else {
        this.displayValue = "-" + this.displayValue;
      }
    },
    handleOperation(operation) {
      try {
        let result;
        switch (operation) {
          case "1/x":
            result = 1 / eval(this.displayValue);
            break;
          case "abs1":
          case "abs2":
            result = Math.abs(eval(this.displayValue));
            break;
          case "**2":
            result = Math.pow(eval(this.displayValue), 2);
            break;
          case "**3":
            result = Math.pow(eval(this.displayValue), 3);
            break;
          case "sqrt":
            result = Math.sqrt(eval(this.displayValue));
            break;
          case "cbrt":
            result = Math.cbrt(eval(this.displayValue));
            break;
          case "10sq":
            result = Math.pow(10, eval(this.displayValue));
            break;
          case "random-num":
            result = Math.floor(Math.random() * eval(this.displayValue));
            break;
          case "floor":
            result = Math.floor(eval(this.displayValue));
            break;
          case "celi":
            result = Math.ceil(eval(this.displayValue));
            break;
          case "to-expo":
            result = Number.parseFloat(this.displayValue).toExponential();
            break;
          case "dms":
            result = this.degToDms(eval(this.displayValue));
            break;
          case "deg":
            result = this.inputToDeg(eval(this.displayValue));
            break;
          case "m-plus":
            this.memory[this.memory.length - 1] =
              Number(this.memory[this.memory.length - 1]) +
              Number(this.displayValue);
            this.saveMemory();
            return;
          case "m-minus":
            this.memory[this.memory.length - 1] =
              Number(this.memory[this.memory.length - 1]) -
              Number(this.displayValue);
            this.saveMemory();
            return;
          default:
            this.handleTrigonometry(operation);
            return;
        }
        this.displayValue = result.toString();
      } catch (error) {
        this.showError("Invalid Input!");
      }
    },
    handleTrigonometry(operation) {
      let value = eval(this.displayValue);
      if (this.unitOfAngle.degree) {
        value = (value * Math.PI) / 180;
      } else if (this.unitOfAngle.grad) {
        value = value * 0.0157;
      }

      switch (operation) {
        case "sin":
          value = Math.sin(value);
          break;
        case "sin-in":
          if (value <= 1 && value >= -1) {
            value = Math.asin(value);
          } else {
            this.showError("Please enter the input from -1 to 1 (RAD)");
            return;
          }
          break;
        case "sin-h":
          value = Math.sinh(value);
          break;
        case "sin-h-in":
          value = Math.asinh(value);
          break;
        case "cos":
          value = Math.cos(value);
          break;
        case "cos-in":
          if (value <= 1 && value >= -1) {
            value = Math.acos(value);
          } else {
            this.showError("Please enter the input from -1 to 1 (RAD)");
            return;
          }
          break;
        case "cos-h":
          value = Math.cosh(value);
          break;
        case "cos-h-in":
          value = Math.acosh(value);
          break;
        case "tan":
          value = Math.tan(value);
          break;
        case "tan-in":
          value = Math.atan(value);
          break;
        case "tan-h":
          value = Math.tanh(value);
          break;
        case "tan-h-in":
          if (value <= 1 && value >= -1) {
            value = Math.atanh(value);
          } else {
            this.showError("Please enter the input from -1 to 1 (RAD)");
            return;
          }
          break;
        case "csc":
          value = 1 / Math.sin(value);
          break;
        case "csc-in":
          if (value <= 1 && value >= -1) {
            value = 1 / Math.asin(value);
          } else {
            this.showError("Please enter the input from -1 to 1 (RAD)");
            return;
          }
          break;
        case "csc-h":
          value = 1 / Math.sinh(value);
          break;
        case "csc-h-in":
          value = 1 / Math.asinh(value);
          break;
        case "sec":
          value = 1 / Math.cos(value);
          break;
        case "sec-in":
          if (value <= 1 && value >= -1) {
            value = 1 / Math.acos(value);
          } else {
            this.showError("Please enter the input from -1 to 1 (RAD)");
            return;
          }
          break;
        case "sec-h":
          value = 1 / Math.cosh(value);
          break;
        case "sec-h-in":
          value = 1 / Math.acosh(value);
          break;
        case "cot":
          value = 1 / Math.tan(value);
          break;
        case "cot-in":
          value = 1 / Math.atan(value);
          break;
        case "cot-h":
          value = 1 / Math.tanh(value);
          break;
        case "cot-h-in":
          if (value <= 1 && value >= -1) {
            value = 1 / Math.atanh(value);
          } else {
            this.showError("Please enter the input from -1 to 1 (RAD)");
            return;
          }
          break;
      }

      this.displayValue = value.toString();
    },
    calculate() {
      try {
        this.displayValue = this.evaluateExpression(
          this.displayValue
        ).toString();
      } catch (error) {
        this.showError("Invalid Input!");
      }
    },
    evaluateExpression(expression) {
      expression = expression.replaceAll("!", '["factorial"]()');
      expression = expression.replaceAll("e", "2.7182");
      expression = expression.replaceAll("π", "3.14");
      expression = expression.replaceAll("log2(", "Math.log2("); // Handle log2 separately
      if (expression.includes("rt")) {
        return this.calculateCustomRoot(expression);
      } else if (expression.includes("log")) {
        return this.calculateLogarithm(expression, "10");
      } else if (expression.includes("ln")) {
        return this.calculateLogarithm(expression, "2.7182");
      } else {
        return eval(expression);
      }
    },
    calculateCustomRoot(expression) {
      const firstNumber = expression.slice(0, expression.indexOf("rt"));
      const secondNumber = expression.slice(
        expression.indexOf("rt") + 2,
        expression.length
      );
      return Math.pow(eval(secondNumber), 1 / eval(firstNumber));
    },
    calculateLogarithm(expression, base) {
      const value = expression.slice(
        expression.indexOf("(") + 1,
        expression.indexOf(")")
      );
      return Math.log(eval(value)) / Math.log(eval(base));
    },
    degToDms(deg) {
      if (this.unitOfAngle.degree === false || isNaN(Number(deg))) {
        this.showError("Please enter the input in DEG with numbers!");
        return;
      }
      let d = Math.floor(deg);
      let minfloat = (deg - d) * 60;
      let m = Math.floor(minfloat);
      let secfloat = (minfloat - m) * 60;
      let s = Math.round(secfloat);
      if (s === 60) {
        m++;
        s = 0;
      }
      if (m === 60) {
        d++;
        m = 0;
      }
      return "" + d + ":" + m + ":" + s;
    },
    inputToDeg(value) {
      if (this.unitOfAngle.degree) {
        return value;
      } else if (this.unitOfAngle.radian) {
        return (value * 180) / Math.PI;
      } else if (this.unitOfAngle.grad) {
        return value / 0.0157;
      }
    },
    changeInUnitOfAngle() {
      if (this.unitOfAngle.degree) {
        this.unitOfAngle.radian = true;
        this.unitOfAngle.degree = false;
        this.angleUnit = "RAD";
      } else if (this.unitOfAngle.radian) {
        this.unitOfAngle.grad = true;
        this.unitOfAngle.radian = false;
        this.angleUnit = "GRAD";
      } else if (this.unitOfAngle.grad) {
        this.unitOfAngle.degree = true;
        this.unitOfAngle.grad = false;
        this.angleUnit = "DEG";
      }
    },
    showError(message) {
      this.errorMessage = message;
      setTimeout(() => {
        this.errorMessage = "";
      }, 5000);
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  scrollbar-width: none; /*for Firefox */
}
::-webkit-scrollbar {
  width: 0;
}
.calDiv {
  width: 23rem;
  padding: 0.6rem;
  max-height: 100%;
  box-shadow: 0rem 0rem 0.25rem 0.0625rem grey;
}
.calDiv__btn {
  background-color: white;
  height: 2.5rem;
  color: black;
  width: 4.3rem;
  margin: 0rem 0.1rem;
  white-space: nowrap;
  border-radius: 0;
}
:where(.calDiv__btn:hover, .calDiv__dropdownBtn--shadow):hover {
  background-color: rgba(131, 131, 131, 0.35);
  transition: 0.5s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.35) 0rem 0.31rem 0.5rem;
  border-radius: 0;
}
.calDiv__dropdownBtn--size {
  width: 3.9rem;
  height: 2.6rem;
  margin: 0.15rem 0.15rem;
}
.calDiv__btn--blue {
  background-color: #6690ce !important;
}
.calDiv__btn--blue:hover {
  background-color: #4b6da0;
  box-shadow: #6690ce 0rem 0.31rem 0.94rem;
}
.calDiv__removeImg--size {
  width: 1.5rem;
}
.calDiv__removeImg--size {
  width: 1.5rem;
}
.calDiv__trigonoImg--size {
  transform: rotate(270deg);
  width: 1.1rem;
}
.calDiv__arrowDownImg--size {
  width: 0.7rem;
}
.calDiv__inputField {
  height: 7rem;
  font-size: 2.4rem;
  margin-top: 1rem;
  text-align: right;
  overflow-y: scroll;
  border: none;
  resize: none;
  background-color: #f8f9fa !important;
}
.calDiv__fnImg--size {
  width: 1.2rem;
}
.calDiv_drawer {
  position: absolute;
  height: 26rem;
  text-align: right;
  z-index: 1;
  background-color: #f8f9fa;
  border: 0.01rem solid rgba(131, 131, 131, 0.35);
  border-radius: 0.5rem 1rem 0rem 0rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0.1rem 0.03rem 0.31rem;
  display: none;
}
.calDiv__closeBtn--color {
  background-color: #f8f9fa;
}
.calDiv__closeImg--size {
  width: 1.2rem;
}
.calDiv__deleteBtnDiv {
  position: absolute;
  top: calc(100% - 3.2rem);
  right: 0.2rem;
}
.calDiv__deleteBtn--color {
  padding: 0.2rem;
  background-color: #f8f9fa;
}
.calDiv__deleteImg--size {
  width: 1.3rem;
  height: 1.3rem;
}
.calDiv__numsDiv {
  margin-top: 0.5rem;
  max-height: 72%;
  overflow: hidden;
  overflow-y: scroll;
}
.calDiv__ErrMsgDiv {
  text-align: justify;
}

/* responsive media queries */
@media only screen and (max-width: 415px), (max-height: 600px) {
  * {
    font-size: 14px;
  }
}
</style>
