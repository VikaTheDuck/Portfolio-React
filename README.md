# React + Vite


Personal Portfolio
https://vikatheduck.github.io/Portfolio-React/

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

${\color{green}Technologies \space Used}$  
- Development: ThreeJS (Three Fiber), Framer Motion, TailwindCSS
- 3D Manipulation: Artec 3D Scanner, Blender, Microsoft 3D Builder, Sketchfab
- Tools and test devices: VS Code, Samsung S8+, MI MAX 3, OnePlus 3, IPad 7th gen 
 

${\color{red}Encountered \space Issues}$  
1. gltf of my face wouldn't load on mobile 🡲 Had to reduce amount of triangles and vertices in the model
2. Hero section would crash on mobile because of several 3D assets loading 🡲 Tried to put it into Error Boundaries
3. Balls with png of my tech stack would not all load on mobile because of all the 3D models 🡲 Had to reduce amount of balls
4. Implemented lazy loading on component that loads 3D model of my head to deal with all issues above
