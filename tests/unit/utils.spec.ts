import chai from 'chai';
import Vue from 'vue';
import * as utils from '@/components/utils';
const expect = chai.expect;

describe('测试utils文件', () => {
  describe('isType函数测试', () => {
    it('测试6种基本类型', () => {
      expect(utils.isType(123)).to.be.equal('[object Number]');
      expect(utils.isType('')).to.be.equal('[object String]');
      expect(utils.isType('测试')).to.be.equal('[object String]');
      expect(utils.isType(null)).to.be.equal('[object Null]');
      expect(utils.isType(undefined)).to.be.equal('[object Undefined]');
      expect(utils.isType(true)).to.be.equal('[object Boolean]');
      expect(utils.isType(Symbol('test'))).to.be.equal('[object Symbol]');
    });
    it('测试引用类型', () => {
      expect(utils.isType([])).to.be.equal('[object Array]');
      expect(utils.isType({})).to.be.equal('[object Object]');
      expect(utils.isType(() => true)).to.be.equal('[object Function]');
    });
  });
  describe('isObject函数测试', () => {
    it('传递不同类型的值返回应正确', () => {
      expect(utils.isObject({})).to.be.equal(true);
      expect(utils.isObject({ name: 123 })).to.be.equal(true);
      expect(utils.isObject([])).to.be.equal(false);
      expect(utils.isObject(undefined)).to.be.equal(false);
      expect(utils.isObject(null)).to.be.equal(false);
      expect(utils.isObject('Object')).to.be.equal(false);
      expect(utils.isObject(123)).to.be.equal(false);
    });
  });
  describe('isArray函数测试', () => {
    it('传递不同类型的值应返回正确', () => {
      expect(utils.isArray({})).to.be.equal(false);
      expect(utils.isArray({ name: 123 })).to.be.equal(false);
      expect(utils.isArray([])).to.be.equal(true);
      expect(utils.isArray(undefined)).to.be.equal(false);
      expect(utils.isArray(null)).to.be.equal(false);
      expect(utils.isArray('Object')).to.be.equal(false);
      expect(utils.isArray(123)).to.be.equal(false);
    });
  });
});
