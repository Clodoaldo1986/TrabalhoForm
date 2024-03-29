'use client'

//import { api } from '@/api';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { data } from 'autoprefixer';

export default function Register() {

    const RegisterSchema = yup.object().shape({
        name: yup.string()            
            .required("O campo 'nome' é obrigatório o preenchimento")
            .min(10, "Nome deve ter no mínimo 10 caracteres."),                        
        data_nasci: yup.string()
            .required("Data de nascimento é obrigatório"),
        altura: yup.number()
            .required("Altura é obrigatorio")            
            .max(300, "Menor que 300 cm")
            .min(0.1, "Maior que 0.1 cm"),                        
        idade: yup.number()            
            .max(200, "Menor que 200 anos")
            .required("Idade é obrigatório"),           
        email: yup.string()            
            .email("Digite um email válido.")
            .required("Email é obrigatório")
            

    });


        const {
            register,
            handleSubmit,
            formState: { errors },
        } = useForm({ resolver: yupResolver(RegisterSchema) });
        const router = useRouter();

        const onSubmit = async data => {
            console.log(data);
            toast.success("Cadastro efetivado")


        };

        

        return (
            <>
                <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-md">
                        <img
                            className="mx-auto h-10 w-auto"
                            src="https://ufr.edu.br/protic/wp-content/themes/ufr/assets/img/logo/ufr-wide.png"
                            alt="UFR"
                        />
                        <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Formulário
                        </h2>
                    </div>

                    <div className=" mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
                        <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
                            <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>


                                <div className='flex flex-row gap-x-4'>

                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                            Nome
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                {...register("name")}
                                                type="text"
                                                autoComplete="name"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                            />
                                        </div>
                                        <p className="mt-2 text-sm text-red-600">
                                        {errors.name?.message }
                                        </p>
                                    </div>

                                    <div>
                                        <label htmlFor="data_nasci" className="block text-sm font-medium leading-6 text-gray-900">
                                            Data de Nascimento
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                {...register("data_nasci")}
                                                type="date"
                                                autoComplete="data_nasci"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                            />
                                        </div>
                                        <p className="mt-2 text-sm text-red-600">
                                        {errors.data_nasci?.message }
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="altura" className="block text-sm font-medium leading-6 text-gray-900">
                                        Altura em cm
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            {...register("altura")}
                                            type="text"
                                            autoComplete="altura"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                        />
                                    </div>
                                    <p className="mt-2 text-sm text-red-600">
                                        
                                        {errors.altura?.message}
                                        </p>
                                </div>

                                <div>
                                    <label htmlFor="idade" className="block text-sm font-medium leading-6 text-gray-900">
                                        Idade
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            {...register("idade")}
                                            type="number"
                                            autoComplete="idade"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                        />
                                    </div>
                                    <p className="mt-2 text-sm text-red-600">
                                        {errors.idade?.message }
                                        </p>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                        Email
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            {...register("email")}
                                            type="text"
                                            autoComplete="email"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                        />
                                    </div>
                                    <p className="mt-2 text-sm text-red-600">
                                        {errors.email?.message }
                                        </p>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                    </div>

                                    <div className="text-sm leading-6">
                                        <input type="reset" value="Limpar campos" className="font-semibold text-indigo-600 hover:text-indigo-500" />
                                        
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Cadastrar
                                    </button>
                                </div>

                            </form>

                        </div>

                    </div>
                </div>
            </>
        )
    }