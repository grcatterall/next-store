interface Renderer {
    fetchData(path: string): Promise<any[]>
    renderAsObjects(path: string): Promise<any[]>
}

export default Renderer;