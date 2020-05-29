class RemHelp {

    constructor(config = {}) {
        this.eventType = config.eventType || 'resize'
        this.scale = config.scale || 10
        this.setVieBind = null

        this.maxWidth = config.maxWidth || 750
        this.minWidth = config.minWidth || 320

        if( typeof config.auto === 'boolean' ) {
            this.auto = config.auto
        } else {
            this.auto = true
        }

        this.accuracy = config.accuracy || 3
        this.config = config
    }

    getFontSize() {
        let clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
        let width = clientWidth;
        if( clientWidth > this.maxWidth ) {
            width = this.maxWidth;
        } else if ( clientWidth < this.minWidth ) {
            width = this.minWidth;
        }
        return (width / this.scale).toFixed(this.accuracy)
    }

    setView(e) {
        let fontSize = this.getFontSize()
        document.documentElement.style.fontSize = (fontSize +'px');
        this.config.onResize && this.config.onResize(e, fontSize)
    }

    addRem() {
        this.setVieBind = this.setView.bind(this)
        this.setVieBind()

        if(this.config.auto) {
            window.addEventListener(this.eventType, this.setVieBind)
        }
    }

    removeRem() {
        document.documentElement.style.fontSize = ''
        if(this.config.auto) {
            window.removeEventListener(this.eventType, this.setVieBind)
        }
    }

}


export default RemHelp;
