const getters = {
    tag: state => state.tags.tag,
    website: state => state.common.website,
    userInfo: state => state.user.userInfo,
    theme: state => state.common.theme,
    themeName: state => state.common.themeName,
    isCollapse: state => state.common.isCollapse,
    isLock: state => state.common.isLock,
    isFullScren: state => state.common.isFullScren,
    lockPasswd: state => state.common.lockPasswd,
    tagList: state => state.tags.tagList,
    tagCurrent: state => state.tags.tagCurrent,
    tagWel: state => state.tags.tagWel,
    token: state => state.user.token,
    roles: state => state.user.roles,
    permissions: state => state.user.permissions,
    menu: state => state.user.menu,
    menuAll: state => state.user.menuAll,
    logsList: state => state.logs.logsList,
    logsLen: state => state.logs.logsList.length || 0,
    logsFlag: (state, getters) => getters.logsLen === 0
}
export default getters
