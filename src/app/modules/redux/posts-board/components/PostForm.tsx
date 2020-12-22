import React from 'react';
import { connect } from 'react-redux';
import { createPost, showAlert } from '../store/actions';
import { Alert } from './Alert';

export interface PostFormState {
  title: string;
}

export interface PostFormProps {
  createPost?: (post: any) => void;
  showAlert?: (text: string) => void;
  alert?: string | null;
}

class PostFormComponent extends React.Component<PostFormProps, PostFormState> {
  state = {
    title: '',
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { title } = this.state;
    const { createPost, showAlert } = this.props;

    if (!title.trim()) {
      if (showAlert) {
        showAlert('Название поста не может быть пустым');
      }

      return;
    }

    const newPost = { title, id: Date.now().toString() };

    this.setState({ title: '' }, () => {
      if (createPost) {
        createPost(newPost);
      }
    });
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();

    this.setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  render() {
    const { alert } = this.props;
    console.log({ alert });

    return (
      <form onSubmit={this.handleSubmit}>
        { alert &&  <Alert text={alert} /> }
        <div className="form-group">
          <label htmlFor="title">Заголовок поста</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={this.state.title}
            name="title"
            onChange={this.handleChange}
          />
        </div>
        <div className="mt-2 mb-2">
          <button className="btn btn-success" type="submit">Создать</button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = {
  createPost,
  showAlert,
};

const mapStateToProps = (state: any) => ({
  alert: state.app.alert,
});

export const PostForm = connect(mapStateToProps, mapDispatchToProps)(PostFormComponent);
