import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import hm2 from "../assets/header-m(2).png";

// Validación con Zod
const loginSchema = z.object({
    email: z.string().email("Debe ser un correo válido"),
    password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

// Tipos derivados del esquema
type LoginFormData = z.infer<typeof loginSchema>;

const Login: React.FC = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = (data: LoginFormData) => {
        console.log("Datos enviados:", data);
        navigate("/home");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden md:flex md:w-4/5">
                {/* Formulario */}
                <div className="md:w-1/2 p-8">
                    <h1 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Correo Electrónico
                            </label>
                            <input
                                type="email"
                                id="email"
                                {...register("email")}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                placeholder="Ingrese su correo"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Contraseña
                            </label>
                            <input
                                type="password"
                                id="password"
                                {...register("password")}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                placeholder="Ingrese su contraseña"
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                        >
                            Iniciar Sesión
                        </button>
                    </form>
                </div>

                {/* Imagen */}
                <div className="hidden md:block md:w-1/2">
                    <img
                        src={hm2}
                        alt="Paciente y doctor conversando"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;
