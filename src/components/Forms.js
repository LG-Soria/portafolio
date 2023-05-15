import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import i18n from "../i18n/index"


const Forms = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);


  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_govdvwx",
        "template_xhqu1m9",
        form.current,
        "W6ZfJU9JLITnxge79"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSending(false);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setIsSending(false);
        }
      );
  };

  return (
    <>
      <section id="form" class="bg-white dark:bg-gray-900">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
             {i18n.t('contactMe')}{" "}
          </h2>
          <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          {i18n.t('contactSub')}
          </p>

          <form ref={form} onSubmit={sendEmail} action="#" class="space-y-8">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                 {i18n.t('email')}
              </label>
              <input
              id="email"
                type="email"
                name="from_email"
                class="
                shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder={i18n.t('emailPlaceholder')}
                required
              ></input>
            </div>
            <div>
              <label
                for="subject"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {i18n.t('asunto')}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder={i18n.t('asuntoPlaceholder')}
                required
              ></input>
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                {i18n.t('message')}
              </label>
              <textarea
                name="message"
                id="message"
                rows="6"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border
                 border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder={i18n.t('messagePlaceholder')}
              ></textarea>
            </div>
            <button
              type="submit"
              value={isSending ? "Enviando..." : "Enviar mensaje"}
              class="py-4 px-6 bg-blue-600 hover:bg-blue-800 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
            >
             {isSending ? "Enviando..." : "Enviar Mensaje"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Forms;
