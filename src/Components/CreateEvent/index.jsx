import * as Styled from "./styles";
import Input from "../../Components/Input";
import { Button } from "../../Components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateEventSchema } from "../../Validation";
import { FiArrowRightCircle } from "react-icons/fi";
import { useContext, useState } from "react";
import { AllEventsContext } from "../../Providers/AllEvents";
import { useUser } from "../../Providers/User";
import toast from "react-hot-toast";
import ReactLoading from "react-loading";

export const CreateEvent = ({ setModal }) => {
  const { addEvent } = useContext(AllEventsContext);
  const { addEventToUser } = useUser();
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(CreateEventSchema),
  });

  const onSubmitCreateEvent = async (data) => {
    setIsLoading(true)
    const eventId = await addEvent(data);
    const status = await addEventToUser(eventId);
    if (status === "OK") {
      toast.success("Evento criado com sucesso");
      setModal(false)
    } else {
      toast.error("Sessão expirada");
      setModal(false)
    }
    setIsLoading(false)
  };

  return (
    <Styled.Container>
      <form
        onSubmit={handleSubmit(onSubmitCreateEvent)}
      >
        <Styled.CloseModal onClick={() => setModal(false)}>
          <span>x</span>
        </Styled.CloseModal>
        <h1>Criar um evento</h1>
        <Input
          label="Nome do evento"
          register={register}
          name="name"
          error={formState.errors.name?.message}
        />
        <Input
          label="Descrição do evento"
          register={register}
          name="description"
          error={formState.errors.description?.message}
        />
        <Input
          label="Categoria"
          register={register}
          name="category"
          error={formState.errors.category?.message}
        />
        <Input
          label="URL da imagem"
          register={register}
          name="img"
          error={formState.errors.img?.message}
        />
        <Input
          label="Capacidade de voluntários"
          register={register}
          name="maxVoluntarys"
          error={formState.errors.maxVoluntarys?.message}
        />
        <Input
          label="Contato"
          register={register}
          name="contact"
          error={formState.errors.contact?.message}
        />
        <Input
          label="Local de realização"
          register={register}
          name="location"
          error={formState.errors.date?.message}
        />
        <Input
          label="Data de realização"
          register={register}
          name="date"
          error={formState.errors.date?.message}
        />
        {isLoading ? (
          <div className="loading">
            <ReactLoading type="spin" color="#c3bd2e" height={30} width={30} />
          </div>
        ) : (
          <div className="btn-createEvent">
          <Button
            padding="10px 30px"
            gap="20px"
            align="center"
            backgroundColor="var(--primaryColor50)"
            weigth="700"
            color="white"
          >
            Criar evento{" "}
            <FiArrowRightCircle color="var(--color-highlight)" size="16px" />
          </Button>
        </div>
        )}
      </form>
    </Styled.Container>
  );
};
