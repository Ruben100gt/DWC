import React from "react";
import Cabecera from "./estructura/Cabecera.jsx";
import Rutas from "./routes/Rutas.jsx";
import Pie from "./estructura/Pie.jsx";
import Notificaciones from "./pages/Notificaciones.jsx";

/*
create or replace function public.insertar_usuario()
returns trigger as $$
begin
  insert into public.roles (id_rol, correo, rol)
  values (new.id, new.email, 'usuario');

  insert into public.perfiles (id_perfil, nombre, avatar_url, descripcion)
  values (
    new.id,
    COALESCE(new.raw_user_meta_data->>'nombre', ''), 
    '', 
    ''
  );

  return new;
end;
$$ language plpgsql security definer;


create trigger al_crear_usuario
  after insert on auth.users
  for each row execute procedure public.insertar_usuario();

create or replace function public.soy_admin()
returns boolean as $$
begin
  return exists (
    select 1
    from public.roles
    where id_rol = auth.uid()
    and rol = 'administrador'
  );
end;
$$ language plpgsql security definer;


*/

const App = () => {
	return (
		<>
			<Cabecera />
			<Notificaciones />
			<Rutas />
			<Pie />
		</>
	);
};

export default App;
