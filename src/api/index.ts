/*
 * @Author: D.Y.M
 * @Date: 2021-11-23 17:26:17
 * @LastEditTime: 2021-11-23 19:18:09
 * @FilePath: /ithink-entity/src/api/index.ts
 * @Description:
 */
const initEntityApis = (prefix: string, request: any) => {
  const getEntities = (params = {}) => {
    return request({
      url: `/${prefix}`,
      method: 'get',
      params,
    })
  }
  /**
   * @description: 创建
   * @param {*} data
   * @return {*}
   */
  const createEntity = (data = {}) => {
    return request({
      url: `/${prefix}`,
      method: 'post',
      data,
    })
  }

  /**
   * @description: 详情
   * @param {*} id:string
   * @return {*}
   */
  const getEntityDetail = (id: string, params = {}) => {
    return request({
      url: `/${prefix}/${id}`,
      method: 'get',
      params,
    })
  }
  /**
   * @description: 更新
   * @param {*} id:string
   * @return {*}
   */
  const updateEntity = (id: string, data = {}) => {
    return request({
      url: `/${prefix}/${id}`,
      method: 'put',
      data,
    })
  }

  const deleteEntity = (id: string) => {
    return request({
      url: `/${prefix}/${id}`,
      method: 'delete',
    })
  }
  return { getEntities, createEntity, getEntityDetail, updateEntity, deleteEntity }
}

export default initEntityApis
