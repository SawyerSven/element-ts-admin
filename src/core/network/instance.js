import { get, post } from './methods';
import * as API from './api';

// 机构注册
export const set_register_org = (data, header) =>
  post(API.SET_REGISTER_ORG, data, header);
// 银行账号列表
export const get_org_account = (data, header) =>
  post(API.GET_ORG_ACCOUNT, data, header);
// 新增编辑银行账号
export const set_org_account = (data, header) =>
  post(API.SET_ORG_ACCOUNT, data, header);
// 机构资质认证
export const set_auth_org = (data, header) =>
  post(API.SET_AUTH_ORG, data, header);
// 登录
export const set_login = (data, header) => post(API.SET_LOGIN, data, header);
// 上传选择机构
export const set_selected_org = (data, header) =>
  post(API.SET_SELECTED_ORG, data, header);
// 申请加入机构
export const set_apply_org = (data, header) =>
  post(API.SET_APPLY_ORG, data, header);
// 重置密码
export const set_reset_pswd = (data, header) =>
  post(API.SET_RESET_PSWD, data, header);
// 退出登录
export const set_signout = _ => post(API.SET_SIGNOUT);
// 合作单位列表
export const get_org_list = (data, header) =>
  post(API.GET_ORG_LIST, data, header);
// 合作单位详情
export const get_org_detail = (data, header) =>
  post(API.GET_ORG_DETAIL, data, header);
// 合作单位-添加
export const set_add_org = (data, header) =>
  post(API.SET_ADD_ORG, data, header);
// 合作单位控制
export const set_org_control = (data, header) =>
  post(API.SET_ORG_CONTROL, data, header);
// 合作单位审批
export const set_org_approve = (data, header) =>
  post(API.SET_ORG_APPROVE, data, header);
// 合作单位删除
export const set_org_delete = (data, header) =>
  post(API.SET_ORG_DELETE, data, header);
// 合作单位重新发起审批
export const set_union_reapply = (data, header) =>
  post(API.SET_UNION_REAPPLY, data, header);
// 合作单位获取双方授权详情
export const get_auth_detail = (data, header) =>
  post(API.GET_AUTH_DETAIL, data, header);
// 合作单位新增授权项目
export const set_auth_project = (data, header) =>
  post(API.SET_AUTH_PROJECT, data, header);
// 合作单位删除授权内容
export const set_remove_auth_project = (data, header) =>
  post(API.SET_REMOVE_AUTH_PROJECT, data, header);
// 合作单位-精确搜索
export const get_search_org = (data, header) =>
  post(API.GET_SEARCH_ORG, data, header);
// 机构详情
export const get_search_org_detail = (data, header) =>
  post(API.GET_SEARCH_ORG_DETAIL, data, header);
// 发送验证码
export const set_send_auth_code = (data, header) =>
  post(API.SET_SEND_AUTH_CODE, data, header);
// 上传文件
export const set_upload_file = (data, headers) =>
  post(API.SET_UPLOAD_FILE, data, headers);
// 获取配置信息
export const get_config = (_, header) => post(API.GET_CONFIG, _, header);
// 预约挂号列表
export const get_clinic_list = (data, header) =>
  post(API.GET_CLINIC_LIST, data, header);
// 预约挂号详情
export const get_clinic_detail = (data, header) =>
  post(API.GET_CLINIC_DETAIL, data, header);
// 预约检查列表
export const get_scan_list = (data, header) =>
  post(API.GET_SCAN_LIST, data, header);
// 预约检查详情
export const get_scan_detail = (data, header) =>
  post(API.GET_SCAN_DETAIL, data, header);
// 预约检验列表
export const get_check_list = (data, header) =>
  post(API.GET_CHECK_LIST, data, header);
// 预约检验详情
export const get_check_detail = (data, header) =>
  post(API.GET_CHECK_DETAIL, data, header);
// 转院管理列表
export const get_transfer_list = (data, header) =>
  post(API.GET_TRANSFER_LIST, data, header);
// 转院管理详情
export const get_transfer_detail = (data, header) =>
  post(API.GET_TRANSFER_DETAIL, data, header);
// 获取字典
export const get_dict = (data, header) => post(API.GET_DICT, data, header);
// 获取不分页的医院列表
export const get_hospital_nopaging = _ =>
  post(API.GET_ORG_NOPAGING, { orgType: 2 });
// 获取不分页的药店列表
export const get_drugstore_nopaging = _ =>
  post(API.GET_ORG_NOPAGING, { orgType: 4 });
// 获取不分页的供应商列表
export const get_supplier_nopaging = _ =>
  post(API.GET_ORG_NOPAGING, { orgType: 3 });
// 获取不分页的部门列表
export const get_dept_nopaging = (data, header) =>
  post(API.GET_DEPT_NOPAGING, data, header);
// 获取不分页的所有机构列表
export const get_org_nopaging = _ => post(API.GET_ORG_NOPAGING, {});
// 获取分页的机构列表
export const get_org = (data, header) =>
  post(API.GET_ORG, { ...data, currentPage: 1, pageSize: 10 }, header);
// 获取分页的合作机构列表
export const get_union_org = (data, header) =>
  post(API.GET_UNION_ORG, { ...data, currentPage: 1, pageSize: 10 }, header);
// 获取分页的医院列表
export const get_hospital = (data, header) =>
  get_union_org({ keyword: data, orgType: 2 }, header);
// 获取分页的药店列表
export const get_store = (data, header) =>
  get_union_org({ keyword: data, orgType: 4 }, header);
// 获取分页的供应商列表
export const get_supplier = (data, header) =>
  get_union_org({ keyword: data, orgType: 3 }, header);
// 获取分页的所有机构
export const get_all_org = (data, header) =>
  get_union_org({ keyword: data }, header);
// 部门列表
export const get_dept_list = (data, header) =>
  post(API.GET_DEPT_LIST, data, header);
// 部门详情
export const get_dept_detail = (data, header) =>
  post(API.GET_DEPT_DETAIL, data, header);
// 编辑部门
export const set_dept_detail = (data, header) =>
  post(API.SET_DEPT_DETAIL, data, header);
// 新增部门
export const set_dept_add = (data, header) =>
  post(API.SET_DEPT_ADD, data, header);
// 部门控制
export const set_dept_control = (data, header) =>
  post(API.SET_DEPT_CONTROL, data, header);
// 删除部门
export const set_dept_remove = (data, header) =>
  post(API.SET_DEPT_REMOVE, data, header);
// 获取部门人员列表
export const get_dept_user = (data, header) =>
  post(API.GET_DEPT_USER, data, header);
// 新增部门人员
export const set_dept_user_add = (data, header) =>
  post(API.SET_DEPT_USER_ADD, data, header);
// 删除部门人员
export const set_dept_user_delete = (data, header) =>
  post(API.SET_DEPT_USER_DELETE, data, header);
// 机构人员列表
export const get_org_user_list = (data, header) =>
  post(API.GET_ORG_USER_LIST, data, header);
// 角色列表
export const get_role_list = (data, header) =>
  post(API.GET_ROLE_LIST, data, header);
// 默认平台角色列表
export const get_role_default_list = (data, header) =>
  post(API.GET_ROLE_DEFAULT_LIST, data, header);
// 用户列表
export const get_user_list = (data, header) =>
  post(API.GET_USER_LIST, data, header);
// 用户详情
export const get_user_detail = (data, header) =>
  post(API.GET_USER_DETAIL, data, header);
// 用户启用/禁用
export const set_user_enable = (data, header) =>
  post(API.SET_USER_ENABLE, data, header);
// 新增用户
export const set_user_add = (data, header) =>
  post(API.SET_USER_ADD, data, header);
// 编辑用户
export const set_user_update = (data, header) =>
  post(API.SET_USER_UPDATE, data, header);
// 给用户增加角色
export const set_role_add = (data, header) =>
  post(API.SET_ROLE_ADD, data, header);
//人员列表
export const get_person_list = (data, header) =>
  post(API.GET_PERSON_LIST, data, header);
// 人员详情
export const get_person_detail = (data, header) =>
  post(API.GET_PERSON_DETAIL, data, header);
// 在售药品管理
export const get_sell_list = (data, header) =>
  post(API.GET_SELL_LIST, data, header);
//在售药品详情
export const get_sell_detail = (data, header) =>
  post(API.GET_SELL_DETAIL, data, header);
// 调价
export const set_sell_price = (data, header) =>
  post(API.SET_SELL_PRICE, data, header);

// 查询权限列表
export const get_route_role_list = (data, header) =>
  post(API.GET_ROUTE_ROLE_LIST, data, { appId: 2 });
// 给角色添加权限
export const set_user_role_add = (data, header) =>
  post(API.SET_USER_ROLE_ADD, data, header);
// 获取登录用户的权限
export const get_login_user_role = (data, header) =>
  post(API.GET_LOGIN_USER_ROLE, data, { appId: 2, ...header });
// 删除角色权限
export const set_user_role_delete = (data, header) =>
  post(API.SET_USER_ROLE_DELETE, data, header);
// 重置密码
export const set_user_reset_pswd = (data, header) =>
  post(API.SET_USER_RESET_PSWD, data, header);
// 删除人员
export const set_user_delete = (data, header) =>
  post(API.SET_USER_DELETE, data, header);
// 获取管理员联系电话
export const get_admin_phone = (data, header) =>
  post(API.GET_ADMIN_PHONE, data, header);
// 修改人员信息
export const set_user_edit = (data, header) =>
  post(API.SET_USER_EDIT, data, header);
// 添加角色
export const get_role_add = (data, header) =>
  post(API.GET_ROLE_ADD, data, header);
// 删除角色
export const set_role_remove = (data, header) =>
  post(API.SET_ROLE_REMOVE, data, header);

// 申请管理
export const get_apply_list = (data, header) =>
  post(API.GET_APPLY_LIST, data, header);
// 申请详情
export const get_apply_detail = (data, header) =>
  post(API.GET_APPLY_DETAIL, data, header);
// 申请控制
export const set_apply_control = (data, header) =>
  post(API.SET_APPLY_CONTROL, data, header);

// * 配送管理开始
// 配送订单列表
export const get_dispatch_list = (data, header) =>
  post(API.GET_DISPATCH_LIST, data, header);
// 配送订单详情
export const get_dispatch_detail = (data, header) =>
  post(API.GET_DISPATCH_DETAIL, data, header);
// 配送员下拉列表
export const get_dispatch_user = (data, header) =>
  post(API.GET_DISPATCH_USER, data, header);
// 派单
export const set_dispatch_send = (data, header) =>
  post(API.SET_DISPATCH_SEND, data, header);
// 撤单
export const set_dispatch_recall = (data, header) =>
  post(API.SET_DISPATCH_RECALL, data, header);
// 配送记录
export const get_dispatch_record = (data, header) =>
  post(API.GET_DISPATCH_RECORD, data, header);
// * 配送管理结束

// * 供应商管理-资源管理

// 药品管理列表
export const get_drug_list = (data, header) =>
  post(API.GET_DRUG_LIST, data, header);
// 药品管理详情
export const get_drug_detail = (data, header) =>
  post(API.GET_DRUG_DETAIL, data, header);
// 搜索药品
export const get_drug_search = (data, header) =>
  post(API.GET_DRUG_SEARCH, data, header);
// 药品管理添加
export const set_drug_add = (data, header) =>
  post(API.SET_DRUG_ADD, data, header);
// 药品管理修改
export const set_drug_update = (data, header) =>
  post(API.SET_DRUG_UPDATE, data, header);
// 药品列表控制
export const set_drug_control = (data, header) =>
  post(API.SET_DRUG_CONTROL, data, header);
// 新增供应药店搜索
export const get_supplier_org = (data, header) =>
  post(API.GET_SUPPLIER_ORG, data, header);
//  新增目录
export const set_supplier_catalog = (data, header) =>
  post(API.SET_SUPPLIER_CATALOG, data, header);
//  删除药品
export const set_supplier_remove = (data, header) =>
  post(API.SET_SUPPLIER_REMOVE, data, header);
// 在售药品删除
export const set_delete_store_drug = (data, header) =>
  post(API.SET_DELETE_STORE_DRUG, data, header);
// 在售药品控制
export const set_control_store_drug = (data, header) =>
  post(API.SET_CONTROL_STORE_DRUG, data, header);

// 器械管理列表
export const get_apparatus_list = (data, header) =>
  post(API.GET_APPARATUS_LIST, data, header);
// 器械搜索(添加)
export const get_apparatus_search = (data, header) =>
  post(API.GET_APPARATUS_SEARCH, data, header);
// 器械详情
export const get_apparatus_detail = (data, header) =>
  post(API.GET_APPARATUS_DETAIL, data, header);
// 添加器械
export const set_apparatus_add = (data, header) =>
  post(API.SET_APPARATUS_ADD, data, header);
// 删除器械
export const set_apparatus_remove = (data, header) =>
  post(API.SET_APPARATUS_REMOVE, data, header);
// 修改(调价)器械信息
export const set_apparatus_update = (data, header) =>
  post(API.SET_APPARATUS_UPDATE, data, header);
// 启用禁用器械
export const set_apparatus_control = (data, header) =>
  post(API.SET_APPARATUS_CONTROL, data, header);
// 新增器械目录
export const set_add_machine_menu = (data, header) =>
  post(API.SET_ADD_MACHINE_MENU, data, header);
// 器械包列表
export const get_package_list = (data, header) =>
  post(API.GET_PACKAGE_LIST, data, header);
// 器械包详情
export const get_package_detail = (data, header) =>
  post(API.GET_PACKAGE_DETAIL, data, header);
// 新增器械包(搜索)
export const get_package_search = (data, header) =>
  post(API.GET_PACKAGE_SEARCH, data, header);
// 新增(修改)器械包材料
export const set_package_add = (data, header) =>
  post(API.SET_PACKAGE_ADD, data, header);
// 器械包启用禁用
export const set_package_enable = (data, header) =>
  post(API.SET_PACKAGE_ENABLE, data, header);
// 器械包删除
export const set_package_delete = (data, header) =>
  post(API.SET_PACKAGE_DELETE, data, header);

// * 供应商管理-资源管理结束

// * 结算管理开始

// 订单列表
export const get_order_list = (data, header) =>
  post(API.GET_ORDER_LIST, data, header);
// 订单详情
export const get_order_detail = (data, header) =>
  post(API.GET_ORDER_DETAIL, data, header);
// 订单统计
export const get_order_summary = (data, header) =>
  post(API.GET_ORDER_SUMMARY, data, header);
// 对账列表
export const get_state_list = (data, header) =>
  post(API.GET_STATE_LIST, data, header);
// 对账详情
export const get_state_detail = (data, header) =>
  post(API.GET_STATE_DETAIL, data, header);
// 结算记录
export const get_settle_list = (data, header) =>
  post(API.GET_SETTLE_LIST, data, header);
// 结算详情
export const get_settle_detail = (data, header) =>
  post(API.GET_SETTLE_DETAIL, data, header);
// 费用列表
export const get_fee_list = (data, header) =>
  post(API.GET_FEE_LIST, data, header);
// 费用详情
export const get_fee_detail = (data, header) =>
  post(API.GET_FEE_DETAIL, data, header);
// 费用统计
export const get_fee_summary = (data, header) =>
  post(API.GET_FEE_SUMMARY, data, header);
// 退款列表
export const get_refund_list = (data, header) =>
  post(API.GET_REFUND_LIST, data, header);
// 退款详情
export const get_refund_detail = (data, header) =>
  post(API.GET_REFUND_DETAIL, data, header);
// * 结算管理结束

// * 手术跟台

// 手术跟台列表
export const get_surgery_list = (data, header) =>
  post(API.GET_SURGERY_LIST, data, header);
// 跟台详情
export const get_surgery_detail = (data, header) =>
  post(API.GET_SURGERY_DETAIL, data, header);
// 手术跟台控制
export const set_surgery_control = (data, header) =>
  post(API.SET_SURGERY_CONTROL, data, header);
// 耗材回收列表
export const get_recall_list = (data, header) =>
  post(API.GET_RECALL_LIST, data, header);
// 耗材清点
export const set_surgery_recovery = (data, header) =>
  post(API.SET_SURGERY_RECOVERY, data, header);

// * 手术跟台结束

// 获取导入院内人员列表
export const get_import_user_list = (data, header) =>
  post(API.GET_IMPORT_USER_LIST, data, header);
// 导入院内人员
export const set_import_user_list = (data, header) =>
  post(API.SET_IMPORT_USER_LIST, data, header);
// 获取导入院内部门列表
export const get_import_dept_list = (data, header) =>
  post(API.GET_IMPORT_DEPT_LIST, data, header);
// 导入院内部门
export const set_import_dept_list = (data, header) =>
  post(API.SET_IMPORT_DEPT_LIST, data, header);

// * 诊疗项目开始

// 诊疗项目列表
export const get_treatment_list = (data, header) =>
  post(API.GET_TREATMENT_LIST, data, header);
// 诊疗项目详情
export const get_treatment_detail = (data, header) =>
  post(API.GET_TREATMENT_DETAIL, data, header);
// 新增诊疗项目
export const set_treatment_add = (data, header) =>
  post(API.SET_TREATMENT_ADD, data, header);
// 编辑诊疗项目
export const set_treatment_update = (data, header) =>
  post(API.SET_TREATMENT_UPDATE, data, header);
// 诊疗项目控制
export const set_treatment_control = (data, header) =>
  post(API.SET_TREATMENT_CONTROL, data, header);
// 诊疗项目费用明细新增
export const set_treatment_item_add = (data, header) =>
  post(API.SET_TREATMENT_ITEM_ADD, data, header);
// 搜索费用明细
export const get_treatment_item = (data, header) =>
  post(API.GET_TREATMENT_ITEM, data, header);
// 诊疗项目导入列表
export const get_treatment_import = (data, header) =>
  post(API.GET_TREATMENT_IMPORT, data, header);
// 诊疗项目导入
export const set_treatment_import = (data, header) =>
  post(API.SET_TREATMENT_IMPORT, data, header);

// * 诊疗项目结束

// * 收费项目开始

// 收费项目列表
export const get_fee_project_list = (data, header) =>
  post(API.GET_FEE_PROJECT_LIST, data, header);
// 收费项目详情
export const get_fee_project_detail = (data, header) =>
  post(API.GET_FEE_PROJECT_DETAIL, data, header);
// 收费项目新增
export const set_fee_project_add = (data, header) =>
  post(API.SET_FEE_PROJECT_ADD, data, header);
// 收费项目更新
export const set_fee_project_update = (data, header) =>
  post(API.SET_FEE_PROJECT_UPDATE, data, header);
// 收费项目控制
export const set_fee_project_control = (data, header) =>
  post(API.SET_FEE_PROJECT_CONTROL, data, header);
// 收费项目删除
export const set_fee_project_remove = (data, header) =>
  post(API.SET_FEE_PROJECT_REMOVE, data, header);
// * 收费项目结束

// * 统计开始

// 预约检验统计
export const get_assay_summary = (data, header) =>
  post(API.GET_ASSAY_SUMMARY, data, header);

// 预约检查统计
export const get_sacn_summary = (data, header) =>
  post(API.GET_SACN_SUMMARY, data, header);

// 预约挂号统计
export const get_clinic_summary = (data, header) =>
  post(API.GET_CLINIC_SUMMARY, data, header);

// 预约转院统计
export const get_transfer_summary = (data, header) =>
  post(API.GET_TRANSFER_SUMMARY, data, header);

// * 统计结束

// 配送费详情
export const get_org_send = () => post(API.GET_ORG_SEND, {});
// 配送机构使用-添加配送费
export const set_add_send = (data, header) =>
  post(API.SET_ADD_SEND, data, header);
// 药店使用-添加配送设置
export const set_config_send = (data, header) =>
  post(API.SET_CONFIG_SEND, data, header);
// 更新配送配置
export const set_update_send = (data, header) =>
  post(API.SET_UPDATE_SEND, data, header);

export const get_user_nopaging = (data, header) =>
  post(API.GET_USER_NOPAGING, data, header);

// 获取用户现有角色
export const get_user_role = data => post(API.GET_USER_ROLE, data);
// 编辑用户角色
export const set_user_role_edit = data => post(API.SET_USER_ROLE_EDIT, data);