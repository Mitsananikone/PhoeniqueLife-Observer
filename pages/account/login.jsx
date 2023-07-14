import { useRouter } from 'next/router';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { Layout } from 'components/account';
import { userService, alertService } from 'services';

export default Login;

function Login() {
    const router = useRouter();

    // form validation rules 
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit({ username, password }) {
        alertService.clear();
        return userService.login(username, password)
            .then(() => {
                // get return url from query parameters or default to '/'
                const returnUrl = router.query.returnUrl || '/';
                router.push(returnUrl);
            })
            .catch(alertService.error);
    }

    return (
        <Layout>
        <div className="bg-white rounded-lg p-8">
          <h4 className="text-xl font-bold mb-4">Login</h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block mb-1 font-medium text-gray-700">Username</label>
              <input
                name="username"
                type="text"
                {...register('username')}
                className={`w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 ${
                  errors.username ? 'border-red-500' : ''
                }`}
              />
              {errors.username && (
                <div className="text-red-500 text-sm mt-1">{errors.username.message}</div>
              )}
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium text-gray-700">Password</label>
              <input
                name="password"
                type="password"
                {...register('password')}
                className={`w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 ${
                  errors.password ? 'border-red-500' : ''
                }`}
              />
              {errors.password && (
                <div className="text-red-500 text-sm mt-1">{errors.password.message}</div>
              )}
            </div>
            <button
              disabled={formState.isSubmitting}
              className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded"
            >
              {formState.isSubmitting && (
                <span className="animate-spin inline-block h-4 w-4 mr-1 border-t-2 border-b-2 border-white rounded-full"></span>
              )}
              Login
            </button>
            <Link href="/account/register" className="text-primary-500 hover:text-primary-600 mt-2">
              Register
            </Link>
          </form>
        </div>
      </Layout>
    );
}
