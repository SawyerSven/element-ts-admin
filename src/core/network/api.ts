/*
 * @Author: sunsiyuan
 * @LastEditors: sunsiyuan
 * @Date: 2019-05-05 11:54:42
 * @LastEditTime: 2019-07-28 11:00:40
 */

import axios from './base.config';
// 机构注册
export const SET_REGISTER_ORG = `${axios._BASE_URL}/org/register`;
// 银行账号列表
export const GET_ORG_ACCOUNT = `${axios._BASE_URL}/org/account`;
// 新增编辑银行账号
export const SET_ORG_ACCOUNT = `${axios._BASE_URL}/org/account/update`
// 机构资质认证
export const SET_AUTH_ORG = `${axios._BASE_URL}/org/certificate`
// 登录
export const SET_LOGIN = `${axios._BASE_URL}/auth/login/user`
// 上传选择机构
export const SET_SELECTED_ORG = `${axios._BASE_URL}/auth/org/put`
// 申请加入机构
export const SET_APPLY_ORG = `${axios._BASE_URL}/user/apply`
// 重置密码
export const SET_RESET_PSWD = `${axios._BASE_URL}/auth/resetPassword/user`
// 退出登录
export const SET_SIGNOUT = `${axios._BASE_URL}/auth/loginOut`
// 合作单位列表
export const GET_ORG_LIST = '/organization/unite/list'
// 合作单位详情
export const GET_ORG_DETAIL = '/organization/unite/detail'
// 合作单位-添加
export const SET_ADD_ORG = '/organization/unite/addUnite'
// 合作单位控制
export const SET_ORG_CONTROL = '/organization/unite/enable'
// 合作单位审批
export const SET_ORG_APPROVE = '/organization/unite/approve'
// 合作单位删除
export const SET_ORG_DELETE = '/organization/unite/delete'
// 合作单位获取双方授权详情
export const GET_AUTH_DETAIL = '/organization/unite/type'
// 合作单位重新发起审批
export const SET_UNION_REAPPLY = '/organization/unite/reApply'
// 合作单位新增授权项目
export const SET_AUTH_PROJECT = '/organization/unite/addAuth'
// 合作单位删除授权内容
export const SET_REMOVE_AUTH_PROJECT = '/organization/unite/deleteAuth'
// 搜索机构
export const GET_SEARCH_ORG = `${axios._BASE_URL}/org/select/list`
// 机构详情
export const GET_SEARCH_ORG_DETAIL = `${axios._BASE_URL}/org/detail`
// 发送验证码
export const SET_SEND_AUTH_CODE = `${axios._BASE_URL}/auth/authCode/send`
// 上传文件
export const SET_UPLOAD_FILE = `${axios._API_URL}/file/upload`
// 获取配置信息
export const GET_CONFIG = `${axios._API_URL}/config`
// 预约挂号列表
export const GET_CLINIC_LIST = '/organization/make/clinic/list'
// 预约挂号详情
export const GET_CLINIC_DETAIL = '/organization/make/clinic/detail'
// 预约检查列表
export const GET_SCAN_LIST = `/organization/make/scan/list`
// 预约检查详情
export const GET_SCAN_DETAIL = '/organization/make/scan/detail'
// 预约检验列表
export const GET_CHECK_LIST = `/organization/make/assay/list`
// 预约检验详情
export const GET_CHECK_DETAIL = '/organization/make/assay/detail'
// 转院管理列表
export const GET_TRANSFER_LIST = '/organization/make/hosp/list'
// 转院管理详情
export const GET_TRANSFER_DETAIL = '/organization/make/hosp/detail'
// 获取字典
export const GET_DICT = `${axios._API_URL}/dict/list`
// 获取不分页的机构列表
export const GET_ORG_NOPAGING = `${axios._BASE_URL}/org/select/list`
// 获取不分页的部门列表
export const GET_DEPT_NOPAGING = `${axios._API_URL}/base/dept/select/list`
// 获取分页的机构列表
export const GET_ORG = `${axios._BASE_URL}/org/list`
// 获取合作机构列表
export const GET_UNION_ORG = `${axios._BASE_URL}/org/list/union/select`
// 部门列表
export const GET_DEPT_LIST = `${axios._API_URL}/base/dept/list`
// 部门详情
export const GET_DEPT_DETAIL = `${axios._API_URL}/base/dept/detail`
// 编辑部门
export const SET_DEPT_DETAIL = `${axios._API_URL}/base/dept/update`
// 新增部门
export const SET_DEPT_ADD = `${axios._API_URL}/base/dept/add`
// 部门控制
export const SET_DEPT_CONTROL = `${axios._API_URL}/base/dept/enable`
// 删除部门
export const SET_DEPT_REMOVE = `${axios._API_URL}/base/dept/delete`
// 获取部门人员列表
export const GET_DEPT_USER = `${axios._API_URL}/platform/dept/user/list`;
// 新增部门人员
export const SET_DEPT_USER_ADD = `${axios._API_URL}/admin/dept/user/add`
// 删除部门人员
export const SET_DEPT_USER_DELETE = `${axios._API_URL}/admin/dept/user/delete`
// 机构人员列表
export const GET_ORG_USER_LIST = `${axios._API_URL}/base/dept/user/list`
// 用户列表
export const GET_USER_LIST = `${axios._BASE_URL}/user/mcAdmin/list`
// 用户详情
export const GET_USER_DETAIL = `${axios._BASE_URL}/user/detail`
// 用户启用/禁用
export const SET_USER_ENABLE = `${axios._BASE_URL}/user/enable`
// 新增用户
export const SET_USER_ADD = `${axios._BASE_URL}/user/add`
// 编辑用户
export const SET_USER_UPDATE = `${axios._BASE_URL}/user/update`
//人员列表
export const GET_PERSON_LIST = '/organization/user/list'
// 人员详情
export const GET_PERSON_DETAIL = '/platform/user/detail'
// 角色列表
export const GET_ROLE_LIST = `${axios._BASE_URL}/role/list`
// 给用户添加角色
export const SET_ROLE_ADD = `${axios._BASE_URL}/role/user/add`
// 默认平台角色列表
export const GET_ROLE_DEFAULT_LIST = `${axios._BASE_URL}/role/default/list`
// 添加角色
export const GET_ROLE_ADD = `${axios._BASE_URL}/role/add`
// 删除角色
export const SET_ROLE_REMOVE = `${axios._BASE_URL}/role/delete`;

// 在售药品管理
export const GET_SELL_LIST = '/organization/drugstore/source/sell/list';
//在售药品详情
export const GET_SELL_DETAIL = '/organization/drugstore/source/sell/detail';
// 调价
export const SET_SELL_PRICE = '/organization/drugstore/source/sell/update'


// 查询权限列表
export const GET_ROUTE_ROLE_LIST = `${axios._BASE_URL}/func/role/list`
// 给角色添加权限
export const SET_USER_ROLE_ADD = `${axios._BASE_URL}/role/func/add`
// 获取登录用户的权限
export const GET_LOGIN_USER_ROLE = `${axios._BASE_URL}/func/user/list`
// 删除角色权限
export const SET_USER_ROLE_DELETE = `${axios._BASE_URL}/role/func/delete`
// 重置密码
export const SET_USER_RESET_PSWD = `${axios._BASE_URL}/user/password/reset`
// 删除人员
export const SET_USER_DELETE = `${axios._BASE_URL}/user/delete`;
// 获取管理员联系电话
export const GET_ADMIN_PHONE = `${axios._BASE_URL}/org/certificate/phone`
// 修改人员信息
export const SET_USER_EDIT = `/platform/user/update`

// 申请管理
export const GET_APPLY_LIST = '/org/base/apply/list'
// 申请详情
export const GET_APPLY_DETAIL = '/org/base/apply/detail'
// 申请控制
export const SET_APPLY_CONTROL = '/org/base/apply'


// * 配送管理开始
// 配送订单列表
export const GET_DISPATCH_LIST = `/organization/dispatch/list`;
// 配送订单详情
export const GET_DISPATCH_DETAIL = `/organization/dispatch/detail`;
// 配送员下拉列表
export const GET_DISPATCH_USER = '/organization/dispatch/user';
// 派单
export const SET_DISPATCH_SEND = '/organization/dispatch/send';
// 撤单
export const SET_DISPATCH_RECALL = '/organization/dispatch/recall';
// 配送记录
export const GET_DISPATCH_RECORD = '/organization/dispatch/record/list'

// * 配送管理结束

// * 供应商管理-资源管理
// 药品管理列表
export const GET_DRUG_LIST = '/organization/supplier/source/list'
// 药品管理详情
export const GET_DRUG_DETAIL = '/organization/supplier/source/detail'
// 搜索药品
export const GET_DRUG_SEARCH = '/organization/supplier/source/searchDrug'
// 药品管理添加
export const SET_DRUG_ADD = '/organization/supplier/source/addDrugs'
// 药品管理修改
export const SET_DRUG_UPDATE = '/organization/supplier/source/update'
// 药品列表控制
export const SET_DRUG_CONTROL = '/organization/supplier/source/enable'
// 新增供应药店搜索
export const GET_SUPPLIER_ORG = '/organization/supplier/source/searchOrg'
//  新增目录
export const SET_SUPPLIER_CATALOG = `/organization/supplier/source/addDrugsApply`
//  删除药品
export const SET_SUPPLIER_REMOVE = `/organization/supplier/source/deleteDrugs`
// 在售药品删除
export const SET_DELETE_STORE_DRUG = `/organization/drugstore/source/sell/delete`;
// 在售药品控制
export const SET_CONTROL_STORE_DRUG = `/organization/drugstore/source/sell/enable`


// 单件器械管理列表
export const GET_APPARATUS_LIST = '/organization/supplier/apparatus/list'
// 单件器械搜索(添加)
export const GET_APPARATUS_SEARCH = '/organization/supplier/apparatus/search'
// 单件器械详情
export const GET_APPARATUS_DETAIL = '/organization/supplier/apparatus/detail'
// 添加单件器械
export const SET_APPARATUS_ADD = '/organization/supplier/apparatus/add'
// 删除器械
export const SET_APPARATUS_REMOVE = '/organization/supplier/apparatus/delete'
// 修改(调价)器械信息
export const SET_APPARATUS_UPDATE = '/organization/supplier/apparatus/update'
// 启用禁用器械
export const SET_APPARATUS_CONTROL = `/organization/supplier/apparatus/enable`
// 新增器械目录
export const SET_ADD_MACHINE_MENU = '/organization/supplier/apparatus/apply'
// 器械包列表
export const GET_PACKAGE_LIST = `/organization/supplier/package/list`
// 器械包详情
export const GET_PACKAGE_DETAIL = `/organization/supplier/package/detail`
// 新增器械包(搜索)
export const GET_PACKAGE_SEARCH = `/organization/supplier/package/search`
// 新增(修改)器械包材料
export const SET_PACKAGE_ADD = '/organization/supplier/package/update'
// 器械包启用禁用
export const SET_PACKAGE_ENABLE = '/organization/supplier/package/enable'
// 器械包删除
export const SET_PACKAGE_DELETE = '/organization/supplier/package/delete'
// * 供应商管理-资源管理结束

//* 结算管理开始

// 订单列表
export const GET_ORDER_LIST = axios._API_URL + '/admin/order/org/list'
// 订单详情
export const GET_ORDER_DETAIL = axios._API_URL + '/admin/order/org/detail'
// 订单统计
export const GET_ORDER_SUMMARY = axios._API_URL + '/admin/order/org/summary'
// 对账列表
export const GET_STATE_LIST = axios._API_URL + '/admin/account/reconciliation/org/list'
// 对账详情
export const GET_STATE_DETAIL = axios._API_URL + '/admin/account/reconciliation/org/detail'
// 结算记录
export const GET_SETTLE_LIST = axios._API_URL + '/admin/account/settle/org/list'
// 结算详情
export const GET_SETTLE_DETAIL = axios._API_URL + '/admin/account/settle/org/detail'
// 费用列表
export const GET_FEE_LIST = axios._API_URL + '/admin/account/org/list'
// 费用详情
export const GET_FEE_DETAIL = axios._API_URL + '/admin/account/org/detail'
// 费用统计
export const GET_FEE_SUMMARY = axios._API_URL + '/admin/account/org/summary'
// 退款列表
export const GET_REFUND_LIST = axios._API_URL + '/admin/refund/list'
// 退款详情
export const GET_REFUND_DETAIL = axios._API_URL + '/admin/refund/detail'

// * 结算管理结束


// * 手术跟台

// 手术跟台列表
export const GET_SURGERY_LIST = axios._API_URL + '/surgery/list'
// 跟台详情
export const GET_SURGERY_DETAIL = axios._API_URL + '/surgery/detail'
// 手术跟台控制
export const SET_SURGERY_CONTROL = axios._API_URL + '/surgery/update'
// 耗材回收列表
export const GET_RECALL_LIST = axios._API_URL + '/surgery/recovery/list'
// 耗材清点
export const SET_SURGERY_RECOVERY = axios._API_URL + '/surgery/recovery'


// * 手术跟台结束

// 获取导入院内人员列表
export const GET_IMPORT_USER_LIST = axios._API_URL + '/base/user/list'
// 导入院内人员
export const SET_IMPORT_USER_LIST = axios._API_URL + '/base/user/import'
// 获取导入院内部门列表
export const GET_IMPORT_DEPT_LIST = axios._API_URL + '/base/dept/import/list'
// 导入院内部门
export const SET_IMPORT_DEPT_LIST = axios._API_URL + '/base/dept/import'
// * 诊疗项目开始

// 诊疗项目列表
export const GET_TREATMENT_LIST = axios._API_URL + '/treatment/list';
// 诊疗项目详情
export const GET_TREATMENT_DETAIL = axios._API_URL + '/treatment/detail';
// 新增诊疗项目
export const SET_TREATMENT_ADD = axios._API_URL + '/treatment/add';
// 编辑诊疗项目
export const SET_TREATMENT_UPDATE = axios._API_URL + '/treatment/update';
// 诊疗项目控制
export const SET_TREATMENT_CONTROL = axios._API_URL + '/treatment/update';
// 诊疗项目费用明细新增
export const SET_TREATMENT_ITEM_ADD = axios._API_URL + '/treatment/item/add';
// 搜索费用明细
export const GET_TREATMENT_ITEM = axios._API_URL + '/treatment/item/search';
// 诊疗项目导入列表
export const GET_TREATMENT_IMPORT = axios._API_URL + '/treatment/item/select';
// 诊疗项目导入
export const SET_TREATMENT_IMPORT = axios._API_URL + '/treatment/item/import'

// * 诊疗项目结束

// * 收费项目开始

// 收费项目列表
export const GET_FEE_PROJECT_LIST = axios._API_URL + '/fee/list';
// 收费项目详情
export const GET_FEE_PROJECT_DETAIL = axios._API_URL + '/fee/detail';
// 收费项目新增
export const SET_FEE_PROJECT_ADD = axios._API_URL + '/fee/add';
// 收费项目更新
export const SET_FEE_PROJECT_UPDATE = axios._API_URL + '/fee/update';
// 收费项目控制
export const SET_FEE_PROJECT_CONTROL = axios._API_URL + '/fee/update';
// 收费项目删除
export const SET_FEE_PROJECT_REMOVE = axios._API_URL + '/fee/delete'

// * 收费项目结束

// 统计开始

// 预约检验统计
export const GET_ASSAY_SUMMARY = '/organization/make/assay/summary';

// 预约检查统计
export const GET_SACN_SUMMARY = '/organization/make/scan/summary';

// 预约挂号统计
export const GET_CLINIC_SUMMARY = '/organization/make/clinic/summary'

// 预约转院统计
export const GET_TRANSFER_SUMMARY = '/organization/make/hosp/summary'

// 统计结束


// 机构配送费

// 配送费详情
export const GET_ORG_SEND = `${axios._API_URL}/organization/org/send/list`;
// 配送机构使用-添加配送费
export const SET_ADD_SEND = `${axios._API_URL}/organization/org/send/addFees`;
// 药店使用-添加配送设置
export const SET_CONFIG_SEND = `${axios._API_URL}/organization/org/send/add`;
// 更新配送配置
export const SET_UPDATE_SEND = `${axios._API_URL}/organization/org/send/update`

export const GET_USER_NOPAGING = `${axios._BASE_URL}/user/select`

// 获取用户现有角色
export const GET_USER_ROLE = `${axios._BASE_URL}/role/user/list`;
// 编辑用户角色
export const SET_USER_ROLE_EDIT = `${axios._BASE_URL}/role/user/update`