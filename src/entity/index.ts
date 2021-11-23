/*
 * @Author: D.Y.M
 * @Date: 2021-11-23 19:20:05
 * @LastEditTime: 2021-11-23 19:25:21
 * @FilePath: /ithink-entity/src/entity/index.ts
 * @Description:
 */
const EntityAdapter = {
  create: (entity: any, list: any) => {
    return [entity, ...list]
  },
  update: (entity: any, list: any) => {
    const index = list.findIndex((n: any) => {
      return n.id === entity.id
    })
    if (index >= 0) {
      list.splice(index, 1, entity)
    } else {
      list.unshift(entity)
    }
    return [...list]
  },
  delete: (entity: any, list: any) => {
    const index = list.findIndex((n: any) => {
      return n.id === entity.id
    })
    if (index >= 0) {
      list.splice(index, 1)
      return [...list]
    }
  }
}


export default EntityAdapter
