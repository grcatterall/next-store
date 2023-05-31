interface Renderer {
    fetchData(): Promise<any[]>
    renderAsObjects(): Promise<any[]>
}

export default Renderer;