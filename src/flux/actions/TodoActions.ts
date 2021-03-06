/*
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * TodoActions
 *
 * Typescript port by Bernd Paradies, May 2015
 * @see https://github.com/facebook/flux/blob/master/examples/flux-todomvc/js/actions/TodoActions.js
 */

///<reference path='../stores/TodoStore.ts'/>

import AppDispatcher = require('../dispatcher/AppDispatcher');
import TodoActionID = require('./TodoActionID');

class TodoActionsStatic {

  // so jshint won't bark
  public TodoActionID = TodoActionID;

  /**
   * @param  {string} text
   */
  public create(text:string): void {
    AppDispatcher.dispatch({
      actionType: TodoActionID.TODO_CREATE,
      text: text
    });
  }

  /**
   * @param  {string} id The ID of the ToDo item
   * @param  {string} text
   */
  public updateText(id: string, text:string): void {
    AppDispatcher.dispatch({
      actionType: TodoActionID.TODO_UPDATE_TEXT,
      id: id,
      text: text
    });
  }

  /**
   * Toggle whether a single ToDo is complete
   * @param  {object} todo
   */
  public toggleComplete(todo: TodoData): void {
    var id: string = todo.id;
    if (todo.complete) {
      AppDispatcher.dispatch({
	     actionType: TodoActionID.TODO_UNDO_COMPLETE,
	     id: id
      });
    } else {
      AppDispatcher.dispatch({
	     actionType: TodoActionID.TODO_COMPLETE,
	     id: id
      });
    }
  }

  /**
   * Mark all ToDos as complete
   */
  public toggleCompleteAll(): void {
    AppDispatcher.dispatch({
      actionType: TodoActionID.TODO_TOGGLE_COMPLETE_ALL
    });
  }

  /**
   * @param  {string} id
   */
  public destroy(id: string): void {
    AppDispatcher.dispatch({
      actionType: TodoActionID.TODO_DESTROY,
      id: id
    });
  }

  /**
   * Delete all the completed ToDos
   */
  public destroyCompleted(): void {
    AppDispatcher.dispatch({
      actionType: TodoActionID.TODO_DESTROY_COMPLETED
    });
  }
}

var TodoActions: TodoActionsStatic = new TodoActionsStatic();

export = TodoActions;
