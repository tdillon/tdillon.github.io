"use strict";

/**
 * - TODO: UI (scrolling history, history expansion)
 * - TODO: create 'Infinity'/'Too Large' amount that Value objects won't exceed.
 * - FEATURE: error/message output?
 * - FEATURE: save history? delete history?
 * - FEATURE: save unit state across page load?
 * - FEATURE: save fraction visibility state across page load?
 * - FEATURE: save current equation across page load?
 * - FEATURE: vibrate for button, vibrate twice for error
 * - FEATURE: should i have heavy/light when rounding occurs?  or a precision lost indicator?
 * - BUG: Large values will blow up equations. e.g.  new Equation().setOperand(new Value(Value.Unit.INCH, '33333333333333333333333333333333333'))
 */

/**
 * http://usejsdoc.org/
 * https://developers.google.com/closure/compiler/docs/js-for-compiler
 */



/**
 * Creates a new Equation object.
 * @example
 * var e = new Equation();
 * var e = new Equation(Value.Unit.MM);
 * @param {Value.Unit=} unit The initial unit of measure for the Values in the Equation.
 * @constructor
 */
function Equation(unit) {
  /**
   * The unit of measure of this Equation.
   * @default Value.Unit.INCH
   * @readonly
   * @type {Value.Unit}
   */
  this.unit = unit || Value.Unit.INCH;

  /**
   * The left operand in this Equation.
   * @readonly
   * @type {Value}
   */
  this.leftOperand = new Value(this.unit);

  /**
   * The right operand in this Equation.
   * @readonly
   * @type {Value}
   */
  this.rightOperand = new Value(this.unit);

  /**
   * The operator in this Equation.
   * @readonly
   * @type {Equation.Operator}
   */
  this.operator = null;

  /**
   * The solution of this Equation.
   * @readonly
   * @type {Value}
   */
  this.solution;

  /**
   * The current operand of this Equation.
   * @readonly
   * @type {Value}
   */
  this.currentOperand = this.leftOperand;
}

/**
 * Append the given digit to the current operand.  The left operand is current when the operator is null, otherwise the right operand is current.
 * @example
 * var e = new Equation();
 * e.pushDigit(3);
 * @param {number} digit The digit to add to the current operand.
 * @returns {Equation} Returns a reference to the calling object (this).
 */
Equation.prototype.pushDigit = function(digit) {
  var operand = (this.operator === null ? this.leftOperand : this.rightOperand);
  operand.addDigit(digit);
  return this;
}

/**
 * Set the fractional amount for the current operand.  The left operand is "current" when the operator is null, otherwise the right operand is "current".
 * @example
 * var e = new Equation();
 * e.setFraction(8);
 * @param {number} sixteenth Set the fractional amount of the current operand to the given sixteenth.  Must be from 1 to 15.
 * @returns {Equation} Returns a reference to the calling object (this).
 */
Equation.prototype.setFraction = function(sixteenth) {
  var operand = (this.operator === null ? this.leftOperand : this.rightOperand);
  operand.setFraction(sixteenth);
  return this;
}

/**
 * Set the current operand to the given Value.  The left operand is "current" when the operator is null, otherwise the right operand is "current".
 * @example
 * var e = new Equation();
 * e.setOperand(new Value('1'));
 * @param {Value} val A Value object to use as the current operand.
 * @returns {Equation} Returns a reference to the calling object (this).
 */
Equation.prototype.setOperand = function(val) {
  this.unit = val.unit;
  if (this.operator === null) {
    this.leftOperand = new Value(val);
    this.currentOperand = this.leftOperand;
    this.rightOperand.setUnit(this.unit);
  } else {
    this.rightOperand = new Value(val);
    this.currentOperand = this.rightOperand;
  }

  return this;
}

/**
 * Set the operator for this Equation.  The left operand must not be empty in order for the operator to be set.
 * @example
 * var e = new Equation();
 * e.setOperand(new Value('1'));
 * e.setOperator('+');
 * @param {Equation.Operator} operator The operator to use for this Equation.
 * @returns {Equation} Returns a reference to the calling object (this).
 */
Equation.prototype.setOperator = function(operator) {
  if (this.leftOperand.raw !== '') {
    this.operator = operator;
    this.currentOperand = this.rightOperand;
  }
  return this;
}

/**
 * Set the decimal point for the current operand.  The decimal point can only be set for whole number Values, i.e. non fractional and non decimal.  The left operand is "current" when the operator is null, otherwise the right operand is "current".
 * @example
 * var e = new Equation();
 * e.setDecimal();
 * @returns {Equation} Returns a reference to the calling object (this).
 */
Equation.prototype.setDecimal = function() {
  var operand = (this.operator === null ? this.leftOperand : this.rightOperand);
  operand.setDecimalPoint();
  return this;
}

/**
 * Change the unit of measure for the current operand.  If the left operand is current, then the right operand will also be set to the given unit of measure.  The left operand is "current" when the operator is null, otherwise the right operand is "current".
 * @example
 * var e = new Equation();
 * e.setUnit(Value.Unit.mm);
 * @param {Value.Unit} unit The new unit of measure to change the current operand to.
 * @returns {Equation} Returns a reference to the calling object (this).
 */
Equation.prototype.setUnit = function(u) {
  this.unit = u;

  if (this.operator === null) {
    this.leftOperand.setUnit(this.unit);
  }

  this.rightOperand.setUnit(this.unit);
  return this;
}

/**
 * Clear the most recent entry to this equation.  The left operand is "current" when the operator is null, otherwise the right operand is "current".
 * @example
 * var e = new Equation(); //  ''
 * e.pushDigit(1).setDecimal().pushDigit(1).setOperator(Equation.Operator.ADD).setFraction(8);  // 1.1" + 1/2"
 * e.clearEntry();  //  1.1" +
 * e.clearEntry();  //  1.1"
 * e.clearEntry();  //  1."
 * e.clearEntry();  //  1"
 * e.clearEntry();  //  ''
 * @returns {Equation} Returns a reference to the calling object (this).
 */
Equation.prototype.clearEntry = function() {
  if (this.rightOperand.raw !== '') {
    this.rightOperand.remove();
  } else if (this.operator !== null) {
    this.operator = null;
    this.unit = this.rightOperand.unit = this.leftOperand.unit;
    this.currentOperand = this.leftOperand;
  } else {
    this.leftOperand.remove();
  }
  return this;
}

/**
 * Calculate the solution of the Equation.
 * @returns {boolean} Returns the Value indicating whether calculation was successful.
 */
Equation.prototype.solve = function() {
  if (this.leftOperand.raw === '' || this.rightOperand.raw === '' || this.operator === null) {
    return false;
  }

  switch (this.operator) {
    case Equation.Operator.DIVIDE: this.solution = Value.divide(this.leftOperand, this.rightOperand); break;
    case Equation.Operator.MULTIPLY: this.solution = Value.multiply(this.leftOperand, this.rightOperand); break;
    case Equation.Operator.ADD: this.solution = Value.add(this.leftOperand, this.rightOperand); break;
    case Equation.Operator.SUBTRACT: this.solution = Value.subtract(this.leftOperand, this.rightOperand); break;
  }

  return true;
}

/**
 * The operator of the Equation.
 * @readonly
 * @enum {string}
 */
Equation.Operator = {
  /** Addition */ ADD: '+',
  /** Subtraction */ SUBTRACT: '-',
  /** Division */ DIVIDE: '/',
  /** Multiplication */ MULTIPLY: '*'
};



/**
 * Creates a new Value object.  Values represent a length either in inches or mm.  Inch lengths can have a fractional portion.  This constructor has 2 overloads, where all parameters are optional.  The first overload is a copy constructor, i.e., Value(Value).  The second overload takes 3 optional parameters (order matters), i.e., Value(Value.Unit, string, boolean).
 * @example
 * //Here are all combinations of Value constructors.
 * var v = new Value(new Value());                 //Value(Value)
 * var v = new Value(Value.Unit.MM, '.5', false);  //Value(Value.Unit, string, boolean)
 * var v = new Value(Value.Unit.INCH, true);       //Value(Value.Unit, boolean)
 * var v = new Value(Value.Unit.MM);               //Value(Value.Unit)
 * var v = new Value('.5', true);                  //Value(string, boolean)
 * var v = new Value('1');                         //Value(string)
 * var v = new Value(true);                        //Value(boolean)
 * var v = new Value();                            //Value()
 * @param {Value=} unit Value([Value]) - This overload is a copy constructor.  Signature = Value(Value)
 * @param {Value.Unit=} unit Value([unit], [raw], [isFractional]) - The unit of measure for the Value.
 * @param {string=} raw Value([unit], [raw], [isFractional]) - A string representation of the Value.
 * @param {boolean=} isFractional Value([unit], [raw], [isFractional]) - Should this Value be treated as fractional.
 * @constructor
 */
function Value(unit, raw, isFractional) {
  //Handle constructor overloads
  switch (typeof unit) {
    case 'object':  //Value(object)  -  copy constructor
      isFractional = unit.isFractional;
      raw = unit.raw;
      unit = unit.unit;
      break;
    case 'number':  //Value(number, string || boolean || null, boolean || null)
      if (typeof raw === 'boolean') {
        isFractional = raw;
        raw = null;
      }
      break;
    case 'string':  //Value(string, boolean || null)
      isFractional = raw;
      raw = unit;
      unit = null;
      break;
    case 'boolean':  //Value(boolean)
      isFractional = unit;
      unit = raw = null;
      break;
  }

  /**
   * The string representation of this Value.   It will include a leading 0 and decimal point when applicable.  Fractional Values will have the decimal equivalent.  The maximum precision will be 6 digits past the decimal point.
   * @default ''
   * @readonly
   * @type {string}
   */
  this.raw = raw || '';

  /**
   * The unit of measure of this value.
   * @default Value.Unit.INCH
   * @readonly
   * @type {Value.Unit}
   */
  this.unit = unit || Value.Unit.INCH;

  /**
   * Indicates whether this Value is identified as having a fractional component.
   * @default false
   * @readonly
   * @type {boolean}
   */
  this.isFractional = (this.unit === Value.Unit.INCH && isFractional) || false;

  /**
   * Indicates whether this Value has a decimal point.
   * @readonly
   * @type {boolean}
  */
  this.isDecimal = !this.isFractional && this.raw.indexOf('.') !== -1;

  /**
   * The equivalent of this Value in decimal millimeters.
   * @readonly
   * @type {number}
  */
  this.mmDecimal;

  /**
   * The equivalent of this value in decimal inches.
   * @readonly
   * @type {number}
  */
  this.inchDecimal;

  /**
   * The whole number portion of the fractional inch representation of this Value.
   * @readonly
   * @type {number}
  */
  this.fracWhole;

  /**
   * Which sixteenth of an inch is the fractional inch representation of this Value.
   * @readonly
   * @type {number}
  */
  this.fracSixteenth;

  /**
   * Identifies the precision of the fractional representation of this Value.
   * @readonly
   * @type Value.Precision
  */
  this.fracPrecision;

  /**
   * The numerator of the fractional representation of this Value.
   * @readonly
   * @type {number}
  */
  this.fracNumerator;

  /**
   * The denominator of the fractional representation of this Value.
   * @readonly
   * @type {number}
  */
  this.fracDenominator;

  this.update();
}

/**
 * Take Value.raw and generate all other member's values.
 * @private
 */
Value.prototype.update = function () {
  if (this.unit === Value.Unit.INCH) {
    this.mmDecimal = Math.round(this.raw * 25400000) / 1000000;
    this.inchDecimal = this.raw * 1;
  } else {
    this.mmDecimal = this.raw * 1;
    this.inchDecimal = parseFloat((this.raw * 1000000 / 25400000).toFixed(6));
  }

  this.fracWhole = Math.floor(this.inchDecimal);
  this.fracPrecision = Value.Precision.EXACT;

  var remainder = this.inchDecimal.toString().indexOf('.') === -1 ? 0 : this.inchDecimal.toString().substr(this.inchDecimal.toString().indexOf('.')) * 1;

  for (var i = 0; i < Value.Sixteenth.length; ++i) {
    if (Value.Sixteenth[i] === remainder) {
      this.fracSixteenth = i;
      break;
    } else if ((Value.Sixteenth[i] + .03125) > remainder) {
      this.fracSixteenth = i;
      this.fracPrecision = Value.Sixteenth[i] < remainder ? Value.Precision.HEAVY : Value.Precision.LIGHT;

      if (this.fracSixteenth === 16) {
        ++this.fracWhole;
        this.fracPrecision = Value.Precision.HEAVY;
        this.fracSixteenth = 0;
      }
      break;
    }
  }

  var gcd16 = Value.gcd(this.fracSixteenth, 16);

  this.fracNumerator = this.fracSixteenth / gcd16;
  this.fracDenominator = 16 / gcd16;
}


/**
 * Change the unit of measure for the Value.
 * @example
 * var v = new Value('1');    //   1"
 * v.setUnit(Value.Unit.MM);  //  25.4mm
 * @param {Value.Unit} unit The new unit to change this Value to.
 * @returns {Value} Returns a reference to the calling object (this).
 */
Value.prototype.setUnit = function(unit) {
  if (unit !== this.unit) {
    this.unit = unit;

    if (this.raw === '') {
      return this;
    }

    this.raw = (this.unit === Value.Unit.INCH ? parseFloat((this.raw * 1000000 / 25400000).toFixed(6)).toString() : Math.round(this.raw * 25400000) / 1000000).toString();

    if (this.unit === Value.Unit.MM) {  //MM cannot be fractional
      this.isFractional = false;
    }

    this.isDecimal = this.raw.indexOf('.') !== -1;

    this.update();
  }

  return this;
}


/**
 * Append a digit to the end of the Value.  Only 3 decimal places are allowed.
 * @example
 * var v = new Value();                                //  ''
 * v.addDigit(1);                                      //  1"
 * v.setDecimalPoint();                                //  1."
 * v.addDigit(1).addDigit(2).addDigit(3).addDigit(4);  //  1.123   only allow 3 decimal places
 * @example
 * var v = new Value('1');  // 1"
 * v.setFraction(8);        // 1 1/2"
 * v.addDigit(3);           // 1 1/2"   no change
 * @param {number} digit The digit to append to this value.
 * @returns {Value} Returns a reference to the calling object (this).
 */
Value.prototype.addDigit = function(digit) {
  if (!this.isFractional && (this.raw.indexOf('.') === -1 || this.raw.length - this.raw.indexOf('.') <= 3)) {
    this.raw += digit;
    this.update();
  }

  return this;
}

/**
 * Set the fractional amount (in sixteenths of an inch) of this Value.  Values must range from 1 to 15.  This method only affects Values that are INCHes and do not have a decimal point.
 * @example
 * var v = new Value();  //  ''
 * v.setFraction(6);     //  3/8"
 * @example
 * var v = new Value('3');  //  3"
 * v.setFraction(9);        //  3 9/16"
 * v.setFraction(1);        //  3 1/16"
 * @param {number} sixteenth The number of sixteenths to set this value to, 1 - 15.
 * @returns {Value} Returns a reference to the calling object (this).
 */
Value.prototype.setFraction = function(sixteenth) {
  if (!(this.isDecimal || this.unit === Value.Unit.MM)) {
    this.isFractional = true;
    this.raw = (Math.floor(this.raw) + Value.Sixteenth[sixteenth]).toString();
    this.update();
  }

  return this;
}

/**
 * Set the location of the decimal point.  This method only affects Values that do not have a decimal already set and are not fractional.
 * @example
 * var v = new Value('1');  //  1"
 * v.setDecimalPoint();     //  1."
 * v.setDecimalPoint();     //  1."   no change
 * @example
 * var v = new Value('1');  //  1"
 * v.setFraction(8);        //  1 1/2"
 * v.setDecimalPoint();     //  1 1/2"   no change
 * @returns {Value} Returns a reference to the calling object (this).
 */
Value.prototype.setDecimalPoint = function() {
  if (!(this.isFractional || this.isDecimal)) {
    this.isDecimal = true;
    if (this.raw === '') {  //include a leading zero
      this.raw += '0';
    }
    this.raw += '.';
  }

  return this;
}

/**
 * Removes the "last" item on this value.  When removing a fraction or decimal point with a leading zero, everything is removed.
 * @example
 * var v = new Value('1.2');  //  1.2"
 * v.remove();                //  1."
 * v.remove();                //  1"
 * v.remove();                //  ''
 * @example
 * var v = new Value('1');  //  1"
 * v.setFraction(8);        //  1 1/2"
 * v.remove();              //  1"
 * @example
 * var v = new Value();  //  ''
 * v.setDecimalPoint();  //  0."
 * v.remove();           //  ''
 * @returns {Value} Returns a reference to the calling object (this).
 */
Value.prototype.remove = function() {
  if (this.isFractional) {
    this.isFractional = false;
    this.raw = (this.raw - Value.Sixteenth[this.fracSixteenth]).toString();
    if (this.raw === '0') {  //when removing fraction with leading zero, clear everything
      this.raw = '';
    }
  } else {
    if (this.raw.charAt(this.raw.length - 1) === '.') {
      this.isDecimal = false;
      if (this.raw === '0.') {  //when removing point with leading zero, clear everything
        this.raw = '';
      }
    }
    this.raw = this.raw.slice(0,-1);
  }
  this.update();

  return this;
}

/**
 * Array of decimal equivalents of 0/16 through 16/16 in 1/16 increments.
 * @readonly
 * @type {Array.<number>}
*/
Value.Sixteenth = [0, .0625, .125, .1875, .25, .3125, .375, .4375, .5, .5625, .625, .6875, .75, .8125, .875, .9375, 1];

/**
 * Get the greatest common divisor of two numbers.  The parameters can be given in any order.
 * @example
 * Value.gcd(24, 64);  //8
 * @static
 * @param {number} a
 * @param {number} b
 * @returns {number} The greatest common divisor of a and b.
 */
Value.gcd = function(a,b) { if(b===0) return a; else return Value.gcd(b, a%b);}

/**
 * The unit of measure of a Value.
 * @readonly
 * @enum {number}
 */
Value.Unit = { /** Inches */ INCH: 0, /** Millimeters */ MM: 1 };

/**
 * TODO
 * @readonly
 * @enum {number}
 */
Value.Precision = { 
  /** The Value has an exact fractional representation. */
  EXACT: 0,
  /** The Value is (0, 1/32) more than fraction, e.g. 0.09374" == 1/16" HEAVY */
  HEAVY: 1,
  /** The Value is (0, 1/32] smaller than fraction, e.g. 0.09375" ==  1/8" LIGHT */
  LIGHT: -1
}

/**
 * Add the given Values together.  The returned Value will have the unit of measure and fractionality of the second Value.
 * @example
 * var v1 = new Value(Value.Unit.MM, '25.4');  //   25.4mm
 * var v2 = new Value('1');                    //  + 1"
 * var v3 = Value.add(v1, v2);                 //  = 2"
 * @static
 * @param {Value} a
 * @param {Value} b
 * @returns {Value} Returns the sum of a and b.
 */
Value.add = function(a, b) {
  var result;

  if (a.unit === b.unit) {  //mm + mm || inch + inch
    result = new Value(b.unit, ((a.raw * 1000000 + b.raw * 1000000) / 1000000).toString());
  } else if(a.unit === Value.Unit.INCH) {  //inch + mm
    result = new Value(b.unit, ((a.raw * 25400000 + b.raw * 1000000) / 1000000).toString());
  } else {  //mm + inch
    result = new Value(a.unit, ((a.raw * 1000000 + b.raw * 25400000) / 1000000).toString());
    result.setUnit(b.unit);
  }

  result.isFractional = b.isFractional;

  return result;
}

/**
 * Subtract the given Values.  The absolute value of the difference is returned.  The returned Value will have the unit of measure and fractionality of the second Value.
 * @example
 * var v1 = new Value(Value.Unit.MM, '25.4');  //   25.4mm
 * var v2 = new Value('1.5', true);            //  - 1 1/2"
 * var v3 = Value.subtract(v1, v2);            //  =   1/2"
 * @static
 * @param {Value} a
 * @param {Value} b
 * @returns {Value} Returns the absolute value of the difference between a and b.
 */
Value.subtract = function(a, b) {
  var result;

  if (a.unit === b.unit) {  //mm - mm || inch - inch
    result = new Value(b.unit, (Math.abs(a.raw * 1000000 - b.raw * 1000000) / 1000000).toString());
  } else if(a.unit === Value.Unit.INCH) {  //inch - mm
    result = new Value(b.unit, (Math.abs(a.raw * 25400000 - b.raw * 1000000) / 1000000).toString());
  } else {  //mm - inch
    result = new Value(a.unit, (Math.abs(a.raw * 1000000 - b.raw * 25400000) / 1000000).toString());
    result.setUnit(b.unit);
  }

  result.isFractional = b.isFractional;

  return result;
}

/**
 * Divide the given Values.  The returned Value will have the unit of measure and fractionality of the second Value.  This method only makes sense for Values with the same unit of measure.
 * @example
 * var v1 = new Value('9');           //    9"
 * var v2 = new Value('2.25', true);  //  / 2 1/4"
 * var v3 = Value.divide(v1, v2);     //  = 4"
 * @static
 * @param {Value} a
 * @param {Value} b
 * @returns {Value} Returns a divided by b.
 */
Value.divide = function(a, b) {
  var result;

  if (a.unit === b.unit) {  //mm / mm || inch / inch
    result = new Value(b.unit, ((a.raw * 1000000) / (b.raw * 1000000)).toString());
  } else if(a.unit === Value.Unit.INCH) {  //inch / mm
    result = new Value(b.unit, ((a.raw * 25400000) / (b.raw * 1000000)).toString());
  } else {  //mm / inch
    result = new Value(a.unit, ((a.raw * 1000000) / (b.raw * 25400000)).toString());
    result.setUnit(b.unit);
  }

  result.isFractional = b.isFractional;

  return result;
}

/**
 * Multiply the given Values.  The returned Value will have the unit of measure and fractionality of the second Value.  This method only makes sense for Values with the same unit of measure.
 * @example
 * var v1 = new Value('1.5', true);  //  1 1/2"
 * var v2 = new Value('2');          //  *  2"
 * var v3 = Value.add(v1, v2);       //  =  3"
 * @static
 * @param {Value} a
 * @param {Value} b
 * @returns {Value} Returns a multiplied by b.
 */
Value.multiply = function(a, b) {
  var result;

  if (a.unit === b.unit) {  //mm * mm || inch * inch
    result = new Value(b.unit, ((a.raw * 1000000) * (b.raw * 1000000) / 1000000000000).toString());
  } else if(a.unit === Value.Unit.INCH) {  //inch * mm
    result = new Value(b.unit, ((a.raw * 25400000) * (b.raw * 1000000) / 1000000000000).toString());
  } else {  //mm * inch
    result = new Value(a.unit, ((a.raw * 1000000) * (b.raw * 25400000) / 1000000000000).toString());
    result.setUnit(b.unit);
  }

  result.isFractional = b.isFractional;

  return result;
}
