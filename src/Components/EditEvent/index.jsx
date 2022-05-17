import * as Styled from "./styles";
import Input from "../../Components/Input";
import { Button } from "../../Components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateEventSchema } from "../../Validation";
import { FiArrowRightCircle } from "react-icons/fi";
import { useState } from "react";
import { useAllEvents } from "../../Providers/AllEvents";
import { useUser } from "../../Providers/User";
import toast from "react-hot-toast";
import ReactLoading from "react-loading";

export const EditEvent = ({ setModal, eventId }) => {
  const { addEvent, allEvents, editEvent } = useAllEvents()
  const { addEventToUser } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(allEvents?.find(({ id }) => id === eventId))

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(CreateEventSchema),
  });

  const onSubmitEditEvent = async (data) => {
    setIsLoading(true)
    const status = await editEvent(eventId, data)
    if (status === "OK") {
      toast.success("Evento editado com sucesso")
    } else {
      toast.error("Sessão expirada")
    }
    setModal(false)
    setIsLoading(false)
  };

  return (
    <Styled.Container>
      <form
        onSubmit={handleSubmit(onSubmitEditEvent)}
      >
        <Styled.CloseModal onClick={() => setModal(false)}>
          <span>x</span>
        </Styled.CloseModal>
        <h1>Editar evento</h1>
        <Input
          label="Nome do evento"
          register={register}
          defaultValue={currentEvent.name}
          name="name"
          error={formState.errors.name?.message}
        />
        <Input
          label="Descrição do evento"
          register={register}
          defaultValue={currentEvent.description}
          name="description"
          error={formState.errors.description?.message}
        />
        <Input
          label="Categoria"
          register={register}
          defaultValue={currentEvent.category}
          name="category"
          error={formState.errors.category?.message}
        />
        <Input
          label="URL da imagem"
          register={register}
          defaultValue={currentEvent.img}
          name="img"
          error={formState.errors.img?.message}
        />
        <Input
          label="Capacidade de voluntários"
          register={register}
          defaultValue={currentEvent.maxVoluntarys}
          name="maxVoluntarys"
          error={formState.errors.maxVoluntarys?.message}
        />
        <Input
          label="Contato"
          register={register}
          defaultValue={currentEvent.contact}
          name="contact"
          error={formState.errors.contact?.message}
        />
        <Input
          label="Local de realização"
          register={register}
          defaultValue={currentEvent.location}
          name="location"
          error={formState.errors.date?.message}
        />
        <Input
          label="Data de realização"
          register={register}
          defaultValue={currentEvent.date}
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
            background="var(--primaryColor50)"
            weigth="700"
            color="white"
          >
            Editar evento{" "}
            <FiArrowRightCircle color="var(--color-highlight)" size="16px" />
          </Button>
        </div>
        )}
      </form>
    </Styled.Container>
  );
};
