export enum State{
  Idle,
  Empty,
  Success,
  Loading,
  Failure,
  BadRequest,
  ServerError,
  UnAuthorized
}

export  class StateValidator{

  IsIdle(state: State): boolean{
    return state === State.Idle
  }

  IsEmpty(state: State): boolean{
    return state === State.Empty
  }


   IsSuccess(state: State): boolean{
  return state === State.Success
  }

   IsFailure(state: State): boolean{
    return state === State.Failure
  }

   IsUnAuthorized(state: State): boolean{
    return state === State.UnAuthorized
  }

   IsLoading(state: State): boolean{
    return state === State.Loading
  }


}
