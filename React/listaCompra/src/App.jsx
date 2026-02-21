import React from 'react';
import Cabecera from './estructura/Cabecera.jsx';
import Rutas from './routes/Rutas.jsx';
import Pie from './estructura/Pie.jsx';
import Notificaciones from './pages/Notificaciones.jsx';

/* CONSULTAS SQL SUPABASE:

-- 1. Función que añade automáticamente el rol 'usuario' y crea el perfil al registrarse.
create or replace function public.insertar_usuario()
returns trigger as $$
begin
  insert into public.perfiles (id_perfil, nombre, avatar_url, descripcion)
  values (
    new.id,
    coalesce(
      new.raw_user_meta_data->>'nombre', 
      new.raw_user_meta_data->>'name', 
      split_part(new.email, '@', 1)
    ),
    '', 
    ''
  );

  insert into public.roles (id_rol, correo, rol)
  values (new.id, new.email, 'usuario');

  return new;
end;
$$ language plpgsql security definer;

-- 2. Disparador que ejecuta la función anterior cada vez que se crea un usuario en auth.users.
create trigger al_crear_usuario
  after insert on auth.users
  for each row execute procedure public.insertar_usuario();

-- 3. Función que comprueba si el usuario actual es administrador (se usa en RLS).
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
