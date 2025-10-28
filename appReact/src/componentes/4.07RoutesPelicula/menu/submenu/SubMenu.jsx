import React from 'react';

const SubMenu = () => {
	return (
		<>
			<nav>
				<Link className="subMenu-elemento" to="/galeria/titulo">
					Título
				</Link>
				<Link className="subMenu-elemento" to="/galeria/interprete">
					Intérprete
				</Link>
				<Link className="subMenu-elemento" to="/galeria/director">
					Director
				</Link>
			</nav>
		</>
	);
};

export default SubMenu;
